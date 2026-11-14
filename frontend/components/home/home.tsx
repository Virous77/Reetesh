'use client';

import { ReactNode } from 'react';
import { Link } from 'next-view-transitions';
import { ArrowUpRight } from 'lucide-react';
import portfolio from '@/data/portfolio.json';
import type { TContributionYear } from '@/lib/contributions';
import ContributionGraph from './contribution-graph';
import { Phrase, useHashSection } from './phrase';

const SECTIONS = ['work', 'projects', 'skills', 'writing'] as const;
type TSection = (typeof SECTIONS)[number];

type TPost = {
  slug: string;
  title: string;
  date: string;
  about: string;
};

type TProps = {
  posts: TPost[];
  postCount: number;
  streak: number | null;
  contributions: TContributionYear[] | null;
};

const projects = [...portfolio.projects].sort(
  (a, b) => Number(b.year) - Number(a.year)
);

const Home = ({ posts, postCount, streak, contributions }: TProps) => {
  const active = useHashSection(SECTIONS, 'work');

  const tabs: { id: TSection; label: string; count: number }[] = [
    { id: 'work', label: 'Work', count: portfolio.work.length },
    { id: 'projects', label: 'Projects', count: projects.length },
    { id: 'skills', label: 'Stack', count: portfolio.skills.length },
    { id: 'writing', label: 'Writing', count: postCount },
  ];

  return (
    <main className="mt-9">
      <p
        className="home-rise home-sentence"
        style={{ '--i': 0 } as React.CSSProperties}
      >
        I&apos;m a full stack engineer in Ahmedabad, and I&apos;ve been building
        web products for close to four years. Here&apos;s{' '}
        <Phrase
          section="work"
          active={active === 'work'}
          text="where I've worked"
        />
        ,{' '}
        <Phrase
          section="projects"
          active={active === 'projects'}
          text="what I've made"
        />{' '}
        on the side and{' '}
        <Phrase
          section="skills"
          active={active === 'skills'}
          text="the tools I use"
        />
        . I also{' '}
        <Phrase section="writing" active={active === 'writing'} text="write" />{' '}
        about what I learn.
      </p>

      <nav
        aria-label="Sections"
        className="home-rise seg mt-8"
        style={{ '--i': 1 } as React.CSSProperties}
      >
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className="seg-pill"
            data-active={active === tab.id}
            aria-current={active === tab.id ? 'true' : undefined}
          >
            {tab.label}
            <span className="seg-count">{tab.count}</span>
          </a>
        ))}
      </nav>

      <div
        className="home-rise mt-8"
        style={{ '--i': 2 } as React.CSSProperties}
      >
        <Panel
          active={active}
          section="work"
          eyebrow="01 / Experience"
          aside={<span className="ledger-meta">2023 — Present</span>}
        >
          <ul className="ledger">
            {portfolio.work.map((job, index) => (
              <li key={job.company} className="ledger-row">
                <div className="ledger-head">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="ledger-title inline-flex items-center gap-1"
                    >
                      {job.company}
                      <ArrowUpRight
                        size={13}
                        className="opacity-50"
                        aria-hidden="true"
                      />
                    </a>
                    <span
                      className={`text-sm font-medium ${index === 0 ? 'text-heading' : 'home-soft'}`}
                    >
                      · {job.role}
                    </span>
                  </div>
                  <span className="ledger-meta">{job.period}</span>
                </div>
                <p className="ledger-text">{job.summary}</p>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel
          active={active}
          section="projects"
          eyebrow="02 / Selected side projects"
          aside={
            <a
              href="https://github.com/Virous77"
              target="_blank"
              rel="noreferrer"
              className="home-link home-soft font-mono text-xs"
            >
              <span className="sm:hidden">GitHub ↗</span>
              <span className="max-sm:hidden">github.com/Virous77 ↗</span>
            </a>
          }
        >
          <ul className="ledger">
            {projects.map((project) => (
              <li key={project.title} className="ledger-row">
                <div className="ledger-head">
                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="ledger-title"
                    >
                      {project.title}
                    </a>
                    {project.badge && (
                      <span className="badge">{project.badge}</span>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="micro-pill"
                    >
                      Live ↗
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="micro-pill"
                    >
                      Code
                    </a>
                    <span className="ledger-meta ml-1">{project.year}</span>
                  </div>
                </div>
                <p className="ledger-text">{project.summary}</p>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel
          active={active}
          section="skills"
          eyebrow="03 / Technical stack"
          aside={<span className="ledger-meta">What I reach for</span>}
        >
          <dl className="ledger">
            {portfolio.skills.map((group) => (
              <div key={group.label} className="skill-row">
                <dt className="text-[0.95rem] font-medium">{group.label}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.split(', ').map((item) => (
                    <span key={item} className="skill-token">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Panel>

        <Panel
          active={active}
          section="writing"
          eyebrow="04 / Latest writing"
          aside={
            <Link
              href="/blogs"
              className="home-link home-soft font-mono text-xs"
            >
              All {postCount} posts →
            </Link>
          }
        >
          <ul className="ledger">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="ledger-row">
                  <span className="ledger-head">
                    <span className="ledger-title">{post.title}</span>
                    <span className="ledger-meta">{post.date}</span>
                  </span>
                  <span className="ledger-text line-clamp-1 text-sm">
                    {post.about}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      {contributions && (
        <ContributionGraph years={contributions} streak={streak} />
      )}
    </main>
  );
};

type TPanelProps = {
  active: TSection;
  section: TSection;
  eyebrow: string;
  aside: ReactNode;
  children: ReactNode;
};

// Only the open section renders, so the page is as tall as its content.
const Panel = ({ active, section, eyebrow, aside, children }: TPanelProps) => {
  if (active !== section) return null;

  return (
    <section id={`panel-${section}`} className="home-swap">
      {/* Both sides stay on one line, so labels never break mid-phrase. */}
      <div className="mb-3 flex items-center justify-between gap-4 whitespace-nowrap">
        <h2 className="eyebrow">{eyebrow}</h2>
        {aside}
      </div>
      {children}
    </section>
  );
};

export default Home;
