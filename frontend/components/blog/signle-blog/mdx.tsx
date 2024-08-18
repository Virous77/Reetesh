import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer2/hooks';
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
import { Separator } from '@/components/ui/separator';
import SubHeadings from '@/lib/sub-headings';
import TableContent from '@/lib/table-content';
import CustomImage from '@/lib/custom-image';
import { ArrowRight } from 'lucide-react';
import Summary, { LI } from '@/lib/summary';
import Youtube from '@/lib/youtube';
import StackBlitzProject from '@/lib/stackblitz-project';
import GradientBorderButton from '@/blog-components/gradient-button';
import RateLimiter from '@/blog-components/rate-limiter';

const components = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        'heading mt-2 scroll-m-[10px] text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        'heading mt-10 scroll-m-[10px] pb-1 text-[1.625rem] font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        'heading mt-8 scroll-m-[10px] text-[1.375rem] font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        'heading mt-8 scroll-m-[10px] text-[1.125rem] font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: any) => (
    <h5
      className={cn(
        'heading mt-8 scroll-m-[10px] text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: any) => (
    <h6
      className={cn(
        'heading mt-8 scroll-m-[10px] text-base font-semibold tracking-tight',
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
    <ul
      className={cn('my-6 ml-0 list-disc pl-0', className)}
      {...props}
      style={{ listStyle: 'none' }}
    />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn('my-6 ml-2 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li
      className={cn(
        'custom-white m-0 mt-2 flex items-start gap-2 p-0',
        className
      )}
      {...props}
    >
      <div className="w-[16px]">
        <ArrowRight size={16} color="#e21d49" style={{ marginTop: '7px' }} />
      </div>

      <div>{props.children}</div>
    </li>
  ),
  blockquote: Note,
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
        'relative px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    />
  ),
  img: CustomImage,
  pre: Pre,
  Video,
  Advertise,
  Tabs,
  Section,
  Callout,
  Table,
  Separator,
  SubHeadings,
  TableContent,
  Summary,
  LI,
  Youtube,
  StackBlitzProject,
  RateLimiter,
  GradientBorderButton,
};

interface MdxProps {
  code: string;
}

export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
};
