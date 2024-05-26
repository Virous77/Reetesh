import React, { ReactNode } from 'react';
import { Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import BlogAction from './blog-action';

type TBlogAction = {
  title: string;
  url: string;
  blogId: string;
};

const BlogShare: React.FC<TBlogAction> = ({ title, url, blogId }) => {
  return (
    <section className="fixed left-5 top-[90px] z-10 h-fit w-fit rounded-lg bg-background p-3">
      <div>
        <BlogAction blogId={blogId} />
        <h2 className="pl-2 text-xl">Share Article</h2>
        <div className=" mt-1 flex flex-wrap items-center gap-2">
          <A url={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            <Facebook />
          </A>

          <A url={`https://x.com/intent/tweet?url=${url}&text=${title}`}>
            <Twitter />
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
    </section>
  );
};

export default BlogShare;

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
