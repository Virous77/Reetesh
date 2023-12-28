import { Card, CardBody, Image } from "@nextui-org/react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";

type TBlog = {
  blogs: BlogPost[];
};

const Blog: React.FC<TBlog> = ({ blogs }) => {
  const createSlug = (title: string) =>
    title.toLowerCase().split(" ").join("-");
  return (
    <section className="h-fit md:h-full lg:overflow-scroll body p-2 md:p-0 relative">
      <h1 className=" my-5 text-[25px]">From My Blogs</h1>
      <ul className=" grid grid-cols-1 lg:grid-cols-2 items-start gap-4 pb-3">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className=" bg-transparent hover:bg-default-50 w-full"
          >
            <CardBody>
              <Image
                src={blog.blogImage}
                alt={blog.title}
                isBlurred
                as={NextImage}
                height={0}
                className=" w-full min-h-[250px] max-h-[250px]"
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                classNames={{
                  wrapper: "!max-w-full",
                }}
              />

              <div className=" flex items-center gap-3 mt-3">
                <span className=" whitespace-nowrap text-tiny">
                  {blog.date}
                </span>
                <span className=" h-[2px] w-full bg-default-100"></span>
              </div>

              <h1 className=" my-5 text-[20px] leading-[1.3] truncate">
                {blog.title}
              </h1>
              <p className=" -mt-2 text-small text-default-500 tracking-wider">
                {blog.about}
              </p>

              <div className=" flex items-center gap-3 mt-3">
                <span className=" h-[2px] w-full bg-default-100"></span>
                <Link href={`/blog/${createSlug(blog.title)}`}>
                  <span className=" whitespace-nowrap text-small font-bold flex items-center gap-2 cursor-pointer hover:underline">
                    Read Full Blog <MoveRight />
                  </span>
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
