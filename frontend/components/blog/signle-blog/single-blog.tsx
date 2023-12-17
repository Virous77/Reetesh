"use server";

import Author from "@/components/common/author";
import Social from "@/components/social/social";
import parse from "html-react-parser";
import HtmlContent from "./html-content";

type TSingleBlog = {
  blog: BlogPost & { contentHtml: string };
};

const SingleBlog: React.FC<TSingleBlog> = ({ blog }) => {
  return (
    <section className=" relative">
      <div className=" md:hidden flex items-center justify-between mb-3 sticky top-0 left-0 w-full bg-background z-10 py-4 px-2">
        <Author />
        <Social styles="" />
      </div>
      <div className="w-[90%] md:w-[1000px] m-auto">
        <div className=" w-[95%] md:w-[70%] m-auto mb-8 mt-4">
          <div className="hidden md:flex items-center justify-between mb-3">
            <Author />
            <Social styles="" />
          </div>
          <h1 className=" text-[20px] md:text-[25px] -mb-1 text-center mt-8">
            {blog.title}
          </h1>
          <p className=" text-small text-default-500 text-center mt-1">
            {blog.date}
          </p>
        </div>

        <div className="md:pl-[60px] mt-6 w-full flex items-center justify-center">
          <div className="  prose  prose-base md:prose-lg prose-neutral dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-lg">
            <HtmlContent>{parse(blog.contentHtml)}</HtmlContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
