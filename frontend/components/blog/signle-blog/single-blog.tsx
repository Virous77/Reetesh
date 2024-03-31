'use server';

import Author from '@/components/common/author';
import Social from '@/components/social/social';
import Footer from '@/components/common/footer';
import { BookOpenText, CalendarDays, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/.contentlayer/generated';
import { Mdx } from './mdx';
import Views from './views';
import Comment from './comment/comment';
import ReadMore from './read-more';
import RelatedPost from '@/components/common/related-post';
import { formateDate } from '@/utils/utils';

type TSingleBlog = {
  blog: Post;
  relatedBlogs: Post[];
};

const SingleBlog: React.FC<TSingleBlog> = ({ blog, relatedBlogs }) => {
  return (
    <section className=" relative">
      <div className=" sticky left-0 top-0 z-10 mb-3 flex w-full items-center justify-between p-4 backdrop-blur dark:bg-[#111111]/60 md:hidden">
        <Author />

        <div className=" flex items-center gap-3">
          <Link href="/blogs" aria-label="Visit all Blogs">
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
              <Link href="/blogs" aria-label="Visit all Blogs">
                <Newspaper />
              </Link>
              <Social styles="" />
            </div>
          </div>
          <h1 className=" m-auto -mb-1 mt-8 w-[90%] text-center text-[26px] font-bold leading-snug md:text-[32px]">
            {blog.title}
          </h1>
          <div className="m-2 mt-3 flex items-center justify-between rounded border p-2 md:m-0 md:mt-[14px]">
            <div className=" flex items-center  gap-4 ">
              <p className=" text-small flex items-center justify-center gap-2 text-[14px] text-default md:text-base">
                <CalendarDays size={20} /> {formateDate(blog.date)}
              </p>
              <Views slug={blog.slugAsParams} />
            </div>
            <span className=" flex  items-center gap-2 text-[14px] capitalize text-default md:text-base">
              <BookOpenText size={20} />
              {blog.readingTime.text}
            </span>
          </div>
        </div>

        <div className="box-fit prose-headings:font-cal prose prose-base prose-neutral mt-6 dark:prose-invert prose-a:whitespace-nowrap prose-a:text-default prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-defaultMax prose-blockquote:font-light prose-img:rounded-lg">
          <Mdx code={blog.body.code} />
        </div>

        <ReadMore slug={blog.slugAsParams} />
        <Comment slug={blog.slugAsParams} />
        {relatedBlogs.length > 0 && <RelatedPost relatedBlogs={relatedBlogs} />}
        <Footer />
      </div>
    </section>
  );
};

export default SingleBlog;
