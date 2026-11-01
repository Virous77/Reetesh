import { Post } from '@/.contentlayer/generated';
import ContactLinks from '@/components/home/contact-links';
import { formateDate } from '@/utils/utils';
import { Link } from 'next-view-transitions';
import BlogShare from './blog-share';
import Comment from './comment/comment';
import { Mdx } from './mdx';
import PostToc from './post-toc';
import ReadMore from './read-more';
import Views from './views';

type TSingleBlog = {
  blog: Post;
  relatedBlogs: Post[];
};

const SingleBlog: React.FC<TSingleBlog> = ({ blog, relatedBlogs }) => {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[46rem] flex-col px-6 pt-14 pb-7 md:pt-[8vh]">
      <header>
        <div
          className="home-rise home-soft flex items-baseline justify-between gap-6 text-[0.95rem]"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          <Link href="/" className="home-link">
            Reetesh Kumar
          </Link>
          <Link href="/blogs" className="home-link">
            All posts
          </Link>
        </div>

        <h1
          className="home-rise post-title mt-9"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          {blog.title}
        </h1>

        <p
          className="home-rise home-soft mt-5 flex flex-wrap gap-x-5 gap-y-1 text-base tabular-nums"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          <span>{formateDate(blog.date)}</span>
          <span>{blog.readingTime.text}</span>
          <Views slug={blog.slugAsParams} />
        </p>
      </header>

      <PostToc />

      <div
        className="home-rise post-body prose prose-base prose-neutral dark:prose-invert mt-10 max-w-none"
        style={{ '--i': 3 } as React.CSSProperties}
      >
        <Mdx code={blog.body.code} />
      </div>

      <BlogShare
        title={blog.title}
        url={`https://reetesh.in/blog/${blog.slugAsParams}`}
        blogId={blog.slugAsParams}
      />

      <Comment slug={blog.slugAsParams} />

      <ReadMore slug={blog.slugAsParams} relatedBlogs={relatedBlogs} />

      <footer className="home-soft mt-auto pt-12 text-sm">
        <ContactLinks />
      </footer>
    </div>
  );
};

export default SingleBlog;
