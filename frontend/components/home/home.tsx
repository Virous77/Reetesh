'use client';

import { ReactNode, useSyncExternalStore } from 'react';
import { Link } from 'next-view-transitions';
import portfolio from '@/data/portfolio.json';
import { ScrambleText, useScramble } from './scramble-text';

const SECTIONS = ['work', 'projects', 'skills', 'writing'] as const;
type TSection = (typeof SECTIONS)[number];

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

const useActiveSection = (): TSection => {
  const hash = useSyncExternalStore(
    subscribe,
    () => window.location.hash.slice(1),
    () => ''
  );

  return SECTIONS.find((section) => section === hash) ?? 'work';
};

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
  const active = useActiveSection();

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
          <Phrase active={active} section="work" text="where I've worked" />,{' '}
          <Phrase active={active} section="projects" text="what I've made" /> on
          the side and{' '}
          <Phrase active={active} section="skills" text="the tools I use" />. I
          also <Phrase active={active} section="writing" text="write" /> about
          what I learn.
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
                  <Link href={`/blog/${post.slug}`} className="home-row">
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
        <nav aria-label="Contact" className="flex flex-wrap gap-x-5 gap-y-1">
          {portfolio.contact.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="home-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
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

const Phrase = ({
  active,
  section,
  text,
}: Omit<TSectionProps, 'children'> & { text: string }) => {
  const { rootRef, scramble } = useScramble();

  return (
    <a
      ref={rootRef}
      href={`#${section}`}
      className="home-phrase"
      aria-label={text}
      aria-controls={`panel-${section}`}
      aria-current={active === section ? 'true' : undefined}
      data-active={active === section}
      onPointerEnter={scramble}
      onFocus={scramble}
    >
      <ScrambleText text={text} />
    </a>
  );
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
