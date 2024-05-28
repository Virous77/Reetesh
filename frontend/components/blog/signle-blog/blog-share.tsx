import React, { ReactNode } from 'react';
import { Linkedin, Facebook, MessageCircle } from 'lucide-react';
import BlogAction from './blog-action';
import { XIcon } from '@/utils/icons/x';

type TBlogAction = {
  title: string;
  url: string;
  blogId: string;
};

const BlogShare: React.FC<TBlogAction> = ({ title, url, blogId }) => {
  return (
    <section className="fixed left-5 top-[90px] z-10 h-fit w-fit rounded-lg bg-background p-3 max-[1226px]:hidden">
      <BlogMain title={title} url={url} blogId={blogId} isMobile={false} />
    </section>
  );
};

export default BlogShare;

type TBlogMain = TBlogAction & {
  isMobile: boolean;
};

const BlogMain = ({ blogId, url, title, isMobile }: TBlogMain) => {
  return (
    <div
      className={`${isMobile ? 'flex w-full items-center justify-between' : 'flex-col'}  gap-2`}
    >
      <BlogAction blogId={blogId} isMobile={isMobile} />
      {!isMobile && <h2 className="pl-2 text-xl">Share Post</h2>}
      <div
        className={`${isMobile ? 'mt-0' : 'mt-1'} flex flex-wrap items-center gap-1 md:gap-2`}
      >
        <A url={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
          <Facebook />
        </A>

        <A url={`https://x.com/intent/tweet?url=${url}&text=${title}`}>
          <XIcon className="h-[21px] w-[21px]" />
        </A>

        <A
          url={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&text=${title}`}
        >
          <Linkedin />
        </A>

        <A url={`https://wa.me/?text=${url}`}>
          <MessageCircle />
          <p className="absolute left-[13.5px] top-[15px] flex h-3 w-3 items-center justify-center  text-[7px]">
            W
          </p>
        </A>
      </div>
    </div>
  );
};

export const BlogShareMobile = ({ blogId, url, title }: TBlogAction) => {
  return (
    <section className="mt-4 min-[1226px]:hidden">
      <BlogMain blogId={blogId} url={url} title={title} isMobile={true} />
    </section>
  );
};

const A: React.FC<{ children: ReactNode; url: string }> = ({
  children,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full hover:bg-accent"
    >
      {children}
    </a>
  );
};
