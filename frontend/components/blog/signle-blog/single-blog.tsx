import Author from '@/components/common/author';
import Social from '@/components/social/social';
import Footer from '@/components/common/footer';
import { BookOpenText, CalendarDays, Newspaper } from 'lucide-react';
import { Post } from '@/.contentlayer/generated';
import { Mdx } from './mdx';
import Views from './views';
import Comment from './comment/comment';
import ReadMore from './read-more';
import RelatedPost from '@/components/common/related-post';
import { formateDate } from '@/utils/utils';
import { Blogs } from '@/routes';
import BlogShare, { BlogShareMobile } from './blog-share';
import { ToolTipComp } from '@/components/ui/tooltip';
import React from 'react';

type TSingleBlog = {
  blog: Post;
  relatedBlogs: Post[];
};

const SingleBlog: React.FC<TSingleBlog> = ({ blog, relatedBlogs }) => {
  return (
    <React.Fragment>
      <header className="sticky left-0 top-0 z-10 mb-3 flex w-full items-center justify-between p-4 backdrop-blur dark:bg-[#111111]/60 md:hidden">
        <Author />

        <div className="flex items-center gap-3">
          <Blogs.Link aria-label="Visit all Blogs">
            <Newspaper />
          </Blogs.Link>
          <Social styles="" />
        </div>
      </header>

      <div style={{ maxWidth: '750px', margin: 'auto' }}>
        <header className="mb-3 mt-4 hidden items-center justify-between md:flex">
          <Author />

          <div className="flex items-center gap-3">
            <ToolTipComp name="All Blogs">
              <Blogs.Link aria-label="Visit all Blogs">
                <Newspaper />
              </Blogs.Link>
            </ToolTipComp>
            <Social styles="" />
          </div>
        </header>

        <section className="mb-8 w-full">
          <h1 className="m-auto -mb-1 mt-8 w-[90%] text-center text-[26px] font-bold leading-snug md:text-[32px]">
            {blog.title}
          </h1>
          <div className="m-2 mt-3 rounded border p-2 md:m-0 md:mt-[14px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <p className="text-small flex items-center justify-center gap-2 text-[14px] text-default md:text-base">
                  <CalendarDays size={20} /> {formateDate(blog.date)}
                </p>
                <Views slug={blog.slugAsParams} />
              </div>
              <span className="flex items-center gap-2 text-[14px] capitalize text-default md:text-base">
                <BookOpenText size={20} />
                {blog.readingTime.text}
              </span>
            </div>

            <BlogShareMobile
              blogId={blog.slugAsParams}
              title={blog.title}
              url={`https://reetesh.in/blog/${blog.slug}`}
            />
          </div>
        </section>

        <section className="box-fit prose-headings:font-cal prose prose-base prose-neutral mt-6 dark:prose-invert prose-a:whitespace-nowrap prose-a:text-default prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-defaultMax prose-blockquote:font-light prose-th:p-0 prose-img:mb-0 prose-img:mt-0">
          <Mdx code={blog.body.code} />
        </section>

        <ReadMore slug={blog.slugAsParams} />
        <Comment slug={blog.slugAsParams} />
      </div>
      {relatedBlogs.length > 0 && <RelatedPost relatedBlogs={relatedBlogs} />}
      <Footer />
      <BlogShare
        title={blog.title}
        url={`https://reetesh.in/blog/${blog.slug}`}
        blogId={blog.slugAsParams}
      />
    </React.Fragment>
  );
};

export default SingleBlog;
