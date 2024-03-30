'use client';

import React, { useEffect, useState } from 'react';
import { Newspaper, Search } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Post } from '@/.contentlayer/generated';
import { useRouter } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { getLocalData, slugify } from '@/utils/utils';

type TCommandSearch = {
  blogs: Post[];
};

const CommandSearch: React.FC<TCommandSearch> = ({ blogs }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string[] | []>([]);
  const router = useRouter();
  const posthog = usePostHog();

  const handleEvent = (type: string, blog?: string) => {
    if (posthog && process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
      posthog?.capture('searched_blog', {
        type: type,
        blog: blog || '',
      });
    }
  };

  const handleRecentSearch = (params: string) => {
    const recentSearch: string[] = getLocalData('recentSearch');
    if (recentSearch && recentSearch.includes(params)) {
      const updatedRecentSearch = [
        params,
        ...recentSearch.filter((item: string) => item !== params),
      ];
      localStorage.setItem('recentSearch', JSON.stringify(updatedRecentSearch));
      return;
    }

    if (recentSearch) {
      if (recentSearch.length >= 5) {
        recentSearch.pop();
      }
      recentSearch.unshift(params);
      localStorage.setItem('recentSearch', JSON.stringify(recentSearch));
    } else {
      localStorage.setItem('recentSearch', JSON.stringify([params]));
    }
  };

  useEffect(() => {
    const recentSearch = getLocalData('recentSearch');
    if (recentSearch) {
      setSearch(recentSearch);
    }

    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleEvent('mouse_click');
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <React.Fragment>
      <div>
        <div
          className=" flex cursor-pointer items-center gap-10 rounded border p-2 pr-6 transition-colors duration-200 ease-in-out hover:bg-accent md:pr-2"
          onClick={() => {
            setOpen(true);
            handleEvent('search_click');
          }}
        >
          <span className=" flex items-center gap-2">
            <Search size={16} className=" text-muted-foreground" />
            <p className=" text-[14px] text-muted-foreground">Search Posts</p>
          </span>
          <kbd className="pointer-events-none  hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] text-sm font-medium text-muted-foreground opacity-100  md:inline-flex">
            <span className="text-xs">⌘</span>
            <span className=" text-[10px]">K</span>
          </kbd>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen} isActive={false}>
        <CommandInput placeholder="Search Posts..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {search.length > 0 && (
            <CommandGroup heading="Recent Searches">
              {search.map((item) => (
                <CommandItem
                  key={item}
                  className=" flex items-center justify-between"
                  onSelect={() => {
                    handleEvent('recent_search_click', item);
                    handleRecentSearch(item);
                    router.push(`/blog/${slugify(item)}`);
                  }}
                >
                  <div className=" flex items-center gap-3">
                    <Search />
                    <span>
                      {item}
                      <span className="hidden">a</span>
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
          <CommandGroup heading="All Blogs">
            {blogs.map((blog) => (
              <CommandItem
                key={blog._id}
                className=" flex items-center justify-between"
                onSelect={() => {
                  handleEvent('blog_click', blog.title);
                  handleRecentSearch(blog.title);
                  router.push(`/blog/${blog.slugAsParams}`);
                }}
              >
                <div className=" flex items-center gap-3">
                  <Newspaper />
                  <span>{blog.title}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </React.Fragment>
  );
};

export default CommandSearch;
