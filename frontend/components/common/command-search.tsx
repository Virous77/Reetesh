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
import { getLocalData, slugify } from '@/utils/utils';
import { Button } from '../ui/button';

type TCommandSearch = {
  blogs: Post[];
};

const CommandSearch: React.FC<TCommandSearch> = ({ blogs }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string[] | []>([]);
  const router = useRouter();

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
        setOpen(true);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <React.Fragment>
      <div>
        <Button
          className="hover:bg-accent flex cursor-pointer items-center gap-10 rounded border bg-transparent p-2 pr-6 transition-colors duration-200 ease-in-out md:pr-2"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="flex items-center gap-2">
            <Search size={16} className="text-muted-foreground" />
            <p className="text-muted-foreground text-[0.875rem]">
              Search Posts
            </p>
          </span>
          <kbd className="bg-muted text-muted-foreground pointer-events-none hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-sm text-[10px] font-medium opacity-100 select-none md:inline-flex">
            <span className="text-xs">⌘</span>
            <span className="text-[0.625rem]">K</span>
          </kbd>
        </Button>
      </div>
      <CommandDialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
        }}
      >
        <CommandInput
          placeholder="Search Posts..."
          className="text-base"
          autoFocus
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {search.length > 0 && (
            <CommandGroup heading="Recent Searches">
              {search.map((item) => (
                <CommandItem
                  key={item}
                  className="flex items-center justify-between"
                  onSelect={() => {
                    handleRecentSearch(item);
                    router.push(`/blog/${slugify(item)}`);
                  }}
                >
                  <div className="flex items-center gap-3">
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
                className="flex items-center justify-between"
                onSelect={() => {
                  handleRecentSearch(blog.title);
                  router.push(`/blog/${blog.slugAsParams}`);
                }}
              >
                <div className="flex items-center gap-3">
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
