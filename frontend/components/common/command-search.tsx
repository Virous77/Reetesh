'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import portfolio from '@/data/portfolio.json';
import { fontVariables } from '@/components/home/fonts';

const OPEN_EVENT = 'open-command-search';
const LATEST_COUNT = 5;

// Lets any part of the page, like the "search" phrase, open the one palette.
export const openCommandSearch = () =>
  window.dispatchEvent(new Event(OPEN_EVENT));

const SECTIONS = [
  { label: 'Where I’ve worked', meta: 'Work', href: '/#work' },
  { label: 'What I’ve made', meta: 'Projects', href: '/#projects' },
  { label: 'The tools I use', meta: 'Stack', href: '/#skills' },
  { label: 'All posts', meta: 'Writing', href: '/blogs' },
  { label: 'Privacy', meta: 'Page', href: '/privacy' },
];

type TPost = {
  _id: string;
  title: string;
  slugAsParams: string;
  month: string;
};

type TCommandSearch = {
  blogs: TPost[];
  trigger?: (open: () => void) => ReactNode;
};

const CommandSearch: React.FC<TCommandSearch> = ({ blogs, trigger }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  // Empty, it shows the latest posts. Typing searches every post.
  const posts = query ? blogs : blogs.slice(0, LATEST_COUNT);

  const close = () => {
    setOpen(false);
    setQuery('');
  };

  // Next.js navigation does not fire hashchange, which the home page listens to.
  const goTo = (href: string) => {
    close();
    const [path, hash] = href.split('#');
    if (hash && window.location.pathname === (path || '/')) {
      window.location.assign(`#${hash}`);
    } else {
      router.push(href);
    }
  };

  const openLink = (href: string) => {
    close();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const show = () => setOpen(true);
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        show();
      }
    };

    document.addEventListener('keydown', down);
    window.addEventListener(OPEN_EVENT, show);
    return () => {
      document.removeEventListener('keydown', down);
      window.removeEventListener(OPEN_EVENT, show);
    };
  }, []);

  return (
    <>
      {trigger?.(() => setOpen(true))}
      <Dialog.Root open={open} onOpenChange={(next) => !next && close()}>
        <Dialog.Portal>
          <Dialog.Overlay className="cmdk-backdrop" />
          <Dialog.Content
            className={`cmdk-panel home-font ${fontVariables}`}
            aria-describedby={undefined}
          >
            <Dialog.Title className="sr-only">Search the site</Dialog.Title>
            <Command loop>
              <div className="cmdk-input-row">
                <Search size={16} className="home-faint" aria-hidden="true" />
                <Command.Input
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Jump to project, section, or blog post..."
                  className="cmdk-input"
                  autoFocus
                />
                <Dialog.Close className="cmdk-esc">ESC</Dialog.Close>
              </div>

              <Command.List className="cmdk-list">
                <Command.Empty className="cmdk-empty">
                  Nothing matches that.
                </Command.Empty>

                <Command.Group
                  heading={query ? 'Posts' : 'Latest posts'}
                  className="cmdk-group"
                >
                  {posts.map((post) => (
                    <Command.Item
                      key={post._id}
                      value={`post ${post.title}`}
                      className="cmdk-item"
                      onSelect={() => goTo(`/blog/${post.slugAsParams}`)}
                    >
                      <span className="truncate">{post.title}</span>
                      <span className="cmdk-meta">{post.month}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Projects" className="cmdk-group">
                  {portfolio.projects.map((project) => (
                    <Command.Item
                      key={project.title}
                      value={`project ${project.title} ${project.summary}`}
                      className="cmdk-item"
                      onSelect={() => openLink(project.live)}
                    >
                      <span className="truncate">
                        {project.title}
                        <span className="home-faint"> — {project.summary}</span>
                      </span>
                      <span className="cmdk-meta text-heading!">Live ↗</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Sections" className="cmdk-group">
                  {SECTIONS.map((section) => (
                    <Command.Item
                      key={section.href}
                      value={`section ${section.label} ${section.meta}`}
                      className="cmdk-item"
                      onSelect={() => goTo(section.href)}
                    >
                      <span className="truncate">{section.label}</span>
                      <span className="cmdk-meta">{section.meta}</span>
                    </Command.Item>
                  ))}
                  <Command.Item
                    value="section cv resume"
                    className="cmdk-item"
                    onSelect={() => openLink('https://cv.reetesh.in')}
                  >
                    <span>CV</span>
                    <span className="cmdk-meta">cv.reetesh.in ↗</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default CommandSearch;
