import { Post } from '@/.contentlayer/generated';
import { formateDate } from '@/utils/utils';
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
    <article className="mt-9">
      <header className="border-b border-(--home-border) pb-8">
        <div
          className="home-rise post-meta"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          <time dateTime={blog.date}>{formateDate(blog.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{blog.readingTime.text}</span>
          <Views slug={blog.slugAsParams} />
        </div>

        <h1
          className="home-rise post-title mt-4"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          {blog.title}
        </h1>

        <p
          className="home-rise home-soft mt-4 text-[1.06rem] leading-relaxed"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          {blog.about}
        </p>

        <PostToc />
      </header>

      <div
        className="home-rise post-body prose prose-base prose-neutral dark:prose-invert mt-8 max-w-none"
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
    </article>
  );
};

export default SingleBlog;
