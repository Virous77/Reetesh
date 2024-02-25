'use server';

import Author from '@/components/common/author';
import Social from '@/components/social/social';
import Footer from '@/components/common/footer';
import { Newspaper } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/.contentlayer/generated';
import { Mdx } from './mdx';
import Views from './views';
import Comment from './comment/comment';

type TSingleBlog = {
  blog: Post;
};

const SingleBlog: React.FC<TSingleBlog> = ({ blog }) => {
  return (
    <section className=" relative">
      <div className=" sticky left-0 top-0 z-10 mb-3 flex w-full items-center justify-between bg-white/60 p-4 backdrop-blur dark:bg-black/60 md:hidden">
        <Author />

        <div className=" flex items-center gap-3">
          <Link href="/blogs" aria-label="blogs">
            <Newspaper />
          </Link>
          <Social styles="" />
        </div>
      </div>
      <div style={{ maxWidth: '750px', margin: 'auto' }}>
        <div className="mb-8 mt-4 w-full">
          <div className="mb-3 hidden items-center justify-between md:flex">
            <Author />

            <div className=" flex items-center gap-3">
              <Link href="/blogs">
                <Newspaper />
              </Link>
              <Social styles="" />
            </div>
          </div>
          <h1 className=" m-auto -mb-1 mt-8 w-[90%] text-center text-[26px] font-bold leading-snug md:text-[32px]">
            {blog.title}
          </h1>
          <Views date={blog.date} slug={blog.slugAsParams} />
        </div>

        <div className="box-fit prose-headings:font-cal prose prose-base prose-neutral mt-6 dark:prose-invert prose-a:whitespace-nowrap prose-a:text-default prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-defaultMax prose-blockquote:font-light prose-img:rounded-lg">
          <Mdx code={blog.body.code} />
        </div>

        <Comment slug={blog.slugAsParams} />
        <Footer />
      </div>
    </section>
  );
};

export default SingleBlog;
