'use client';

import { ReactNode } from 'react';
import { Link } from 'next-view-transitions';
import portfolio from '@/data/portfolio.json';
import ContactLinks from './contact-links';
import { Phrase, useHashSection } from './phrase';

const SECTIONS = ['work', 'projects', 'skills', 'writing'] as const;
type TSection = (typeof SECTIONS)[number];

type TPost = {
  slug: string;
  title: string;
  date: string;
};

type TProps = {
  posts: TPost[];
  stats: { contributions: number; streak: number } | null;
};

const Home = ({ posts, stats }: TProps) => {
  const active = useHashSection(SECTIONS, 'work');

  return (
    <div className="mx-auto flex min-h-dvh max-w-[46rem] flex-col px-6 pt-14 pb-7 md:pt-[8vh]">
      <main>
        <h1
          className="home-rise home-soft text-[0.95rem]"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          {portfolio.name}
        </h1>

        <p
          className="home-rise home-sentence mt-5"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          I&apos;m a full stack engineer in Ahmedabad, and I&apos;ve been
          building web products for close to four years. Here&apos;s{' '}
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
          <Phrase
            section="writing"
            active={active === 'writing'}
            text="write"
          />{' '}
          about what I learn.
        </p>

        <div
          className="home-rise home-panels mt-10"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          <Panel active={active} section="work">
            <ul className="space-y-6">
              {portfolio.work.map((job) => (
                <li key={job.company}>
                  <Row title={job.company} href={job.url} meta={job.period} />
                  <p className="home-soft mt-1">
                    {job.role}. {job.summary}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel active={active} section="projects">
            <ul className="space-y-3">
              {portfolio.projects.map((project) => (
                <li key={project.title}>
                  <div className="flex items-baseline justify-between gap-6">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="home-row-title"
                    >
                      {project.title}
                    </a>
                    <span className="home-soft flex shrink-0 gap-4 text-sm tabular-nums">
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="home-link"
                      >
                        Code
                      </a>
                      {project.year}
                    </span>
                  </div>
                  <p className="home-soft">{project.summary}</p>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel active={active} section="skills">
            <dl className="space-y-3">
              {portfolio.skills.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-x-6 sm:grid-cols-[5.5rem_1fr]"
                >
                  <dt className="home-soft">{group.label}</dt>
                  <dd>{group.items}</dd>
                </div>
              ))}
            </dl>
          </Panel>

          <Panel active={active} section="writing">
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="home-row home-row-stack"
                  >
                    <span className="home-row-title">{post.title}</span>
                    <span className="home-soft shrink-0 text-sm tabular-nums">
                      {post.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/blogs" className="home-link mt-6 inline-block">
              All posts
            </Link>
          </Panel>
        </div>
      </main>

      <footer
        className="home-rise home-soft mt-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-2 pt-12 text-sm"
        style={{ '--i': 3 } as React.CSSProperties}
      >
        <ContactLinks />
        {stats && (
          <p>
            {stats.contributions.toLocaleString('en-US')} contributions,{' '}
            {stats.streak} day streak
          </p>
        )}
      </footer>
    </div>
  );
};

type TSectionProps = {
  active: TSection;
  section: TSection;
  children: ReactNode;
};

const Panel = ({ active, section, children }: TSectionProps) => (
  <div
    id={`panel-${section}`}
    className="home-panel"
    data-active={active === section}
    inert={active !== section}
  >
    {children}
  </div>
);

const Row = ({
  title,
  href,
  meta,
}: {
  title: string;
  href: string;
  meta: string;
}) => (
  <a href={href} target="_blank" rel="noreferrer" className="home-row">
    <span className="home-row-title">{title}</span>
    <span className="home-soft shrink-0 text-sm tabular-nums">{meta}</span>
  </a>
);

export default Home;
