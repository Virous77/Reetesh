/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { Link } from 'next-view-transitions';
import CommandSearch from '@/components/common/command-search';
import ContactLinks from '@/components/home/contact-links';
import { Phrase, PhraseButton, useHashSection } from '@/components/home/phrase';

type TIndexPost = {
  _id: string;
  title: string;
  slugAsParams: string;
  about: string;
  image: string;
  year: string;
  day: string;
  topics: string[];
};

const TOPICS = ['nextjs', 'react', 'ai', 'backend', 'all'] as const;

type TPreview = {
  post: TIndexPost;
  top: number;
};

const PREVIEW_HEIGHT = 330;

const BlogIndex = ({ posts }: { posts: TIndexPost[] }) => {
  const topic = useHashSection(TOPICS, 'all');
  const [preview, setPreview] = useState<TPreview | null>(null);

  const visible =
    topic === 'all'
      ? posts
      : posts.filter((post) => post.topics.includes(topic));
  const years = [...new Set(visible.map((post) => post.year))];

  const showPreview = (post: TIndexPost, rowTop: number) => {
    const maxTop = window.innerHeight - PREVIEW_HEIGHT;
    setPreview({ post, top: Math.max(24, Math.min(rowTop, maxTop)) });
  };

  return (
    <div className="mx-auto flex min-h-dvh max-w-[46rem] flex-col px-6 pt-14 pb-7 md:pt-[8vh]">
      <main>
        <Link
          href="/"
          className="home-rise home-soft home-link text-[0.95rem]"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          Reetesh Kumar
        </Link>

        <h1
          className="home-rise home-sentence mt-5"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          I&apos;ve written {posts.length} posts so far, mostly about{' '}
          <Phrase section="nextjs" active={topic === 'nextjs'} text="Next.js" />
          , <Phrase
            section="react"
            active={topic === 'react'}
            text="React"
          />, <Phrase section="ai" active={topic === 'ai'} text="AI" /> and{' '}
          <Phrase
            section="backend"
            active={topic === 'backend'}
            text="the backend"
          />
          . You can{' '}
          <CommandSearch
            blogs={posts}
            trigger={(open) => <PhraseButton text="search" onClick={open} />}
          />{' '}
          them, or just read{' '}
          <Phrase section="all" active={topic === 'all'} text="everything" />.
        </h1>

        <div
          key={topic}
          className="home-rise mt-12"
          style={{ '--i': 2 } as React.CSSProperties}
          onPointerLeave={() => setPreview(null)}
        >
          {years.map((year) => (
            <section key={year} className="mb-9">
              <h2 className="home-soft mb-2 text-sm tabular-nums">{year}</h2>
              <ul>
                {visible
                  .filter((post) => post.year === year)
                  .map((post) => (
                    <li key={post._id}>
                      <Link
                        href={`/blog/${post.slugAsParams}`}
                        className="blog-row"
                        onPointerEnter={(event) =>
                          showPreview(
                            post,
                            event.currentTarget.getBoundingClientRect().top
                          )
                        }
                      >
                        <span className="blog-row-title">
                          <span className="home-row-title">{post.title}</span>
                          <span className="home-soft shrink-0 text-sm tabular-nums">
                            {post.day}
                          </span>
                        </span>
                        <span className="home-soft mt-0.5 line-clamp-2 text-[0.95rem] xl:hidden">
                          {post.about}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </main>

      <footer className="home-soft mt-auto pt-8 text-sm">
        <ContactLinks />
      </footer>

      {preview && (
        <aside
          className="blog-preview"
          style={{ transform: `translateY(${preview.top}px)` }}
          aria-hidden="true"
        >
          <img
            key={preview.post._id}
            src={preview.post.image}
            alt=""
            className="blog-preview-image"
          />
          <p className="home-soft mt-3 text-[0.95rem] leading-snug">
            {preview.post.about}
          </p>
        </aside>
      )}
    </div>
  );
};

export default BlogIndex;
