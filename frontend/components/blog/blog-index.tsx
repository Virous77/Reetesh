/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { openCommandSearch } from '@/components/common/command-search';
import { Phrase, PhraseButton, useHashSection } from '@/components/home/phrase';

type TIndexPost = {
  _id: string;
  title: string;
  slugAsParams: string;
  about: string;
  image: string;
  readTime: string;
  year: string;
  day: string;
  topics: string[];
};

const TOPICS = ['all', 'nextjs', 'react', 'ai', 'backend'] as const;

const TOPIC_LABELS: Record<(typeof TOPICS)[number], string> = {
  all: 'All',
  nextjs: 'Next.js',
  react: 'React',
  ai: 'AI & Agents',
  backend: 'Backend & Infra',
};

type TPreview = {
  post: TIndexPost;
  top: number;
};

const PREVIEW_HEIGHT = 330;

const BlogIndex = ({ posts }: { posts: TIndexPost[] }) => {
  const topic = useHashSection(TOPICS, 'all');
  const [preview, setPreview] = useState<TPreview | null>(null);

  const inTopic = (id: string) =>
    id === 'all' ? posts : posts.filter((post) => post.topics.includes(id));
  const visible = inTopic(topic);
  const years = [...new Set(visible.map((post) => post.year))];

  const showPreview = (post: TIndexPost, rowTop: number) => {
    const maxTop = window.innerHeight - PREVIEW_HEIGHT;
    setPreview({ post, top: Math.max(24, Math.min(rowTop, maxTop)) });
  };

  return (
    <main className="mt-9">
      <h1
        className="home-rise home-sentence"
        style={{ '--i': 0 } as React.CSSProperties}
      >
        I&apos;ve written {posts.length} posts so far, mostly about{' '}
        <Phrase section="nextjs" active={topic === 'nextjs'} text="Next.js" />,{' '}
        <Phrase section="react" active={topic === 'react'} text="React" />,{' '}
        <Phrase section="ai" active={topic === 'ai'} text="AI" /> and{' '}
        <Phrase
          section="backend"
          active={topic === 'backend'}
          text="the backend"
        />
        . You can <PhraseButton text="search" onClick={openCommandSearch} />{' '}
        them, or just read{' '}
        <Phrase section="all" active={topic === 'all'} text="everything" />.
      </h1>

      <nav
        aria-label="Topics"
        className="home-rise seg mt-8"
        style={{ '--i': 1 } as React.CSSProperties}
      >
        {TOPICS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="seg-pill"
            data-active={topic === id}
            aria-current={topic === id ? 'true' : undefined}
          >
            {TOPIC_LABELS[id]}
            <span className="seg-count">{inTopic(id).length}</span>
          </a>
        ))}
      </nav>

      <div
        className="home-rise mt-9"
        style={{ '--i': 2 } as React.CSSProperties}
      >
        <div
          key={topic}
          className="home-swap space-y-11"
          onPointerLeave={() => setPreview(null)}
        >
          {years.map((year) => {
            const yearPosts = visible.filter((post) => post.year === year);

            return (
              <section key={year}>
                <div className="mb-2.5 flex items-center justify-between">
                  <h2 className="eyebrow">{year}</h2>
                  <span className="ledger-meta">
                    {yearPosts.length}{' '}
                    {yearPosts.length === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                <ul className="ledger">
                  {yearPosts.map((post) => (
                    <li key={post._id}>
                      <Link
                        href={`/blog/${post.slugAsParams}`}
                        className="ledger-row"
                        onPointerEnter={(event) =>
                          showPreview(
                            post,
                            event.currentTarget.getBoundingClientRect().top
                          )
                        }
                      >
                        <span className="ledger-head">
                          <span className="ledger-title">{post.title}</span>
                          <span className="ledger-meta flex items-center gap-2.5">
                            <span>{post.readTime}</span>
                            <span className="opacity-40">·</span>
                            <span className="sm:w-12 sm:text-right">
                              {post.day}
                            </span>
                          </span>
                        </span>
                        <span className="ledger-text line-clamp-1 text-[0.92rem]">
                          {post.about}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      {preview && (
        <aside
          className="blog-preview"
          style={{ transform: `translateY(${preview.top}px)` }}
          aria-hidden="true"
        >
          <div className="ledger-meta mb-2.5 flex items-center justify-between uppercase">
            <span className="text-heading">
              {preview.post.topics[0]
                ? TOPIC_LABELS[
                    preview.post.topics[0] as keyof typeof TOPIC_LABELS
                  ]
                : 'Essay'}
            </span>
            <span>{preview.post.readTime}</span>
          </div>
          <img
            key={preview.post._id}
            src={preview.post.image}
            alt=""
            className="blog-preview-image"
          />
          <p className="home-soft mt-3 text-[0.86rem] leading-relaxed">
            {preview.post.about}
          </p>
        </aside>
      )}
    </main>
  );
};

export default BlogIndex;
