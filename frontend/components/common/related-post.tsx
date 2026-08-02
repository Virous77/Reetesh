import { Post } from '@/.contentlayer/generated';
import { Link } from 'next-view-transitions';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import { formateDate } from '@/utils/utils';

const RelatedPost = ({ relatedBlogs }: { relatedBlogs: Post[] }) => {
  const posts = relatedBlogs.slice(0, 3);

  return (
    <section className="mx-auto mt-10 mb-6 w-full max-w-[1000px] px-4 md:px-6">
      <header className="border-border/60 flex items-end justify-between gap-4 border-b pb-4">
        <div>
          <p className="text-heading font-mono text-[11px] tracking-[0.3em] uppercase">
            Keep Reading
          </p>
          <h2 className="text-defaultMax mt-2 text-xl font-semibold tracking-tight">
            Related Posts
          </h2>
        </div>
        <Link
          href="/blogs"
          aria-label="Visit all blogs"
          className="text-default hover:text-heading hidden shrink-0 items-center gap-1.5 font-mono text-[12px] tracking-wide sm:flex"
        >
          All posts
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </header>

      <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <li
            key={post.slug}
            style={{ animationDelay: `${Math.min(i * 70, 210)}ms` }}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
          >
            <Link
              id={post.slugAsParams}
              href={`/blog/${post.slugAsParams}`}
              aria-label={post.title}
              className="group border-border/70 bg-card/60 hover:border-heading/40 flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt={post.title}
                  src={post.blogImage}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-linear-to-t from-black/45 via-black/0 to-black/0 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <span className="text-defaultMax absolute top-3 right-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-black/45 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="text-default flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10.5px] tracking-wide">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {formateDate(post.date)}
                  </span>
                  <span className="bg-border h-2.5 w-px" aria-hidden />
                  <span className="flex items-center gap-1 capitalize">
                    <Clock className="h-3 w-3" />
                    {post.readingTime.text}
                  </span>
                </div>

                <h3 className="text-defaultMax group-hover:text-heading mt-2 line-clamp-2 text-[0.95rem] leading-snug font-semibold transition-colors">
                  {post.title}
                </h3>

                {post.about && (
                  <p className="text-default mt-2 line-clamp-2 text-[0.8rem] leading-5">
                    {post.about}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RelatedPost;
