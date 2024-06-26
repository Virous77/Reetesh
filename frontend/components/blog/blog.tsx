import { Home, LibrarySquare, MoveRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Post } from '@/.contentlayer/generated';
import { formateDate } from '@/utils/utils';
import CommandSearch from '../common/command-search';
import { BlogDetails, Projects, Root } from '@/routes';

type TBlog = {
  blogs: Post[];
};

const Blog: React.FC<TBlog> = ({ blogs }) => {
  return (
    <section className="body relative h-fit p-2 md:h-full md:p-0 lg:overflow-scroll">
      <div className="sticky top-0 flex items-center justify-between bg-background p-1 pl-2 md:p-0 md:pl-2">
        <h1 className="my-2 hidden text-[18px] md:my-5 md:block md:text-[25px]">
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
      </div>

      <ul className="grid grid-cols-1 items-start gap-4 pb-3 md:grid-cols-2">
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Card className="w-full border-none bg-transparent hover:bg-popover">
              <CardContent className="p-3">
                <Image
                  src={blog.blogImage}
                  alt={blog.title}
                  height={0}
                  className="max-h-[250px] min-h-[250px] w-full rounded"
                  width={0}
                  sizes="100vw"
                />

                <div className="mt-3 flex items-center gap-3">
                  <span className="whitespace-nowrap font-mono text-[13px]">
                    {formateDate(blog.date)}
                  </span>
                  <span className="h-[2px] w-full bg-default"></span>
                </div>

                <h1 className="my-5 truncate text-[20px] leading-[1.3]">
                  {blog.title}
                </h1>
                <p className="-mt-2 text-[14px] tracking-wider text-muted-foreground">
                  {blog.about}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="h-[2px] w-full bg-default"></span>
                  <BlogDetails.Link id={blog.slugAsParams}>
                    <span className="flex cursor-pointer items-center gap-2 whitespace-nowrap text-[13px] font-bold hover:underline hover:underline-offset-4">
                      Read Full Blog <MoveRight />
                    </span>
                  </BlogDetails.Link>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
