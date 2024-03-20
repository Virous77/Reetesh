import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';
import { Pre } from '@/lib/pre';
import { Note } from '@/lib/note';
import { A } from '@/lib/a';
import { Video } from '@/lib/video';
import Advertise from '@/lib/advertise';
import Tabs from '@/lib/Tabs';
import Section from '@/lib/section';
import Callout from '@/lib/callout';
import Table from '@/lib/table';

const components = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20  pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: any) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: any) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: A,
  p: ({ className, ...props }: any) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn('my-6 ml-2 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn('my-6 ml-2 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: Note,
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),

  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        'relative  px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    />
  ),
  Image,
  pre: Pre,
  Video,
  Advertise,
  Tabs,
  Section,
  Callout,
  Table,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
