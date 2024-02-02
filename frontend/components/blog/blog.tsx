import { Home, LibrarySquare, MoveRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Post } from "@/.contentlayer/generated";
import { formateDate } from "@/utils/utils";

type TBlog = {
  blogs: Post[];
};

const Blog: React.FC<TBlog> = ({ blogs }) => {
  return (
    <section className="h-fit md:h-full lg:overflow-scroll body p-2 md:p-0 relative">
      <div className="sticky top-0 md:static p-1 bg-background pl-2   flex items-center justify-between">
        <h1 className=" my-2 md:my-5 text-[18px] md:text-[25px]  ">
          From My Blogs
        </h1>

        <div className="pr-2  md:hidden flex items-center gap-4">
          <Link href="/projects">
            <LibrarySquare size={22} />
          </Link>

          <Link href="/">
            <Home size={22} />
          </Link>
        </div>
      </div>

      <ul className=" grid grid-cols-1 lg:grid-cols-2 items-start gap-4 pb-3">
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Card className=" bg-transparent hover:bg-popover w-full border-none">
              <CardContent className="p-3">
                <Image
                  src={blog.blogImage}
                  alt={blog.title}
                  height={0}
                  className=" w-full min-h-[250px] max-h-[250px] rounded"
                  width={0}
                  sizes="100vw"
                />

                <div className=" flex items-center gap-3 mt-3">
                  <span className=" whitespace-nowrap text-[13px]">
                    {formateDate(blog.date)}
                  </span>
                  <span className=" h-[2px] w-full bg-default"></span>
                </div>

                <h1 className=" my-5 text-[20px] leading-[1.3] truncate">
                  {blog.title}
                </h1>
                <p className=" -mt-2 text-[14px] text-muted-foreground tracking-wider">
                  {blog.about}
                </p>

                <div className=" flex items-center gap-3 mt-3">
                  <span className=" h-[2px] w-full bg-default"></span>
                  <Link href={`/blog/${blog.slugAsParams}`}>
                    <span className=" whitespace-nowrap text-[13px] font-bold flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-4">
                      Read Full Blog <MoveRight />
                    </span>
                  </Link>
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
