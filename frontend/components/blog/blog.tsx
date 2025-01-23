import { Home, LibrarySquare, MoveRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Post } from '@/.contentlayer/generated';
import { formateDate } from '@/utils/utils';
import CommandSearch from '../common/command-search';
import { BlogDetails, Projects, Root } from '@/routes';
import BlogBorder from './blog-border';

type TBlog = {
  blogs: Post[];
};

const Blog: React.FC<TBlog> = ({ blogs }) => {
  return (
    <section className="body relative h-fit p-2 pt-0 md:h-full md:p-0 lg:overflow-scroll">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background p-1 pl-2 pt-2 md:p-0 md:pl-2">
        <h1 className="my-2 hidden text-[1.125rem] font-semibold md:my-5 md:block md:text-[1.563rem]">
          From My Blogs
        </h1>
        <CommandSearch blogs={blogs} />

        <div className="flex items-center gap-4 pr-2 md:hidden">
          <Projects.Link aria-label="Visit Projects Page">
            <LibrarySquare size={22} />
          </Projects.Link>

          <Root.Link aria-label="Visit Home Page">
            <Home size={22} />
          </Root.Link>
        </div>
      </header>

      <ul className="mt-3 grid grid-cols-1 items-stretch gap-4 pb-3 md:mt-0 md:grid-cols-2">
        {blogs.map((blog) => (
          <li key={blog._id} className="group relative list-none">
            <BlogBorder>
              <Card className="h-full w-full border-none shadow-sm">
                <CardContent className="border-none p-3 shadow-sm">
                  <CardImage src={blog.blogImage} title={blog.title} />

                  <div className="mt-3 flex items-center gap-3">
                    <span className="whitespace-nowrap font-mono text-[0.813rem]">
                      {formateDate(blog.date)}
                    </span>
                    <span className="h-[2px] w-full bg-default"></span>
                  </div>

                  <h1 className="my-5 truncate text-[1.25rem] leading-[1.3]">
                    {blog.title}
                  </h1>
                  <p className="-mt-2 text-[0.875rem] tracking-wider text-muted-foreground">
                    {blog.about}
                  </p>

                  <div className="mt-3 flex items-center gap-1">
                    <span className="h-[2px] w-full bg-default"></span>
                    <BlogDetails.Link id={blog.slugAsParams}>
                      <p className="relative">
                        <span className="relative z-10 flex cursor-pointer items-center gap-2 whitespace-nowrap px-2 text-[0.813rem] font-bold transition-all group-hover:text-background">
                          Read Full Post <MoveRight />
                        </span>
                        <span className="absolute bottom-0 left-0 z-0 h-0 w-full rounded bg-foreground transition-all group-hover:h-full" />
                      </p>
                    </BlogDetails.Link>
                  </div>
                </CardContent>
              </Card>
            </BlogBorder>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;

const CardImage = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="z-1 h-full w-full overflow-hidden transition-all duration-300 group-hover:rounded-sm">
      <Image
        src={src}
        alt={title}
        height={0}
        aria-label={title}
        className="animate-fade-in max-h-[250px] min-h-[250px] w-full scale-100 transform rounded-sm object-center opacity-100 transition duration-300 group-hover:scale-110"
        width={0}
        sizes="100vw"
      />
    </div>
  );
};
