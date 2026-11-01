'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { Newspaper, Search } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useRouter } from 'next/navigation';
import { getLocalData, slugify } from '@/utils/utils';
import { fontVariables } from '@/components/home/fonts';

type TCommandSearch = {
  blogs: { _id: string; title: string; slugAsParams: string }[];
  trigger: (open: () => void) => ReactNode;
};

const CommandSearch: React.FC<TCommandSearch> = ({ blogs, trigger }) => {
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
      {trigger(() => setOpen(true))}
      <CommandDialog
        className={`${fontVariables} home-font`}
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
