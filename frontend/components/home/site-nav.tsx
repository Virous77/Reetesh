'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import CommandSearch from '@/components/common/command-search';
import ThemeSwitcher from '@/components/theme/theme-switcher';

type TPost = {
  _id: string;
  title: string;
  slugAsParams: string;
  month: string;
};

const SiteNav = ({ posts }: { posts: TPost[] }) => {
  const pathname = usePathname();
  const onWriting = pathname.startsWith('/blog');

  return (
    <header className="site-header">
      <div className="flex min-w-0 items-center gap-3">
        <Link href="/" className="site-name">
          Reetesh Kumar
        </Link>
        <span className="site-place">
          <span className="site-place-divider" aria-hidden="true">
            /
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="site-place-dot" aria-hidden="true" />
            Ahmedabad, IN
          </span>
        </span>
      </div>

      <nav aria-label="Primary" className="site-nav">
        <Link href="/" className="site-nav-link" data-active={pathname === '/'}>
          Index
        </Link>
        <Link href="/blogs" className="site-nav-link" data-active={onWriting}>
          Writing
        </Link>
        <a
          href="https://cv.reetesh.in"
          target="_blank"
          rel="noreferrer"
          className="site-nav-link max-sm:hidden!"
        >
          CV
          <ArrowUpRight size={12} className="opacity-60" aria-hidden="true" />
        </a>
        <CommandSearch
          blogs={posts}
          trigger={(open) => (
            <button
              type="button"
              className="site-nav-tool"
              onClick={open}
              aria-label="Search"
            >
              <Search size={13} aria-hidden="true" />
              <span className="font-mono max-sm:hidden">⌘K</span>
            </button>
          )}
        />
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default SiteNav;
