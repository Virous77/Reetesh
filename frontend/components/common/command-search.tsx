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

type TCommandSearch = {
  blogs: Post[];
};

const CommandSearch: React.FC<TCommandSearch> = ({ blogs }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
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
          className=" flex cursor-pointer items-center gap-10 rounded border p-2 transition-colors duration-200 ease-in-out hover:bg-accent"
          onClick={() => setOpen(true)}
        >
          <span className=" flex items-center gap-2">
            <Search size={16} className=" text-muted-foreground" />
            <p className=" text-[14px] text-muted-foreground">Search Posts</p>
          </span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] text-sm font-medium text-muted-foreground  opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen} isActive={false}>
        <CommandInput placeholder="Search Posts..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {blogs.map((blog) => (
              <CommandItem
                key={blog._id}
                className=" flex items-center justify-between"
                onSelect={() => {
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
