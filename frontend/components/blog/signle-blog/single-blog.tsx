"use server";

import dynamic from "next/dynamic";

import Author from "@/components/common/author";
import Social from "@/components/social/social";
import parse from "html-react-parser";
import Footer from "@/components/contact/footer";
import { CalendarDays, Home } from "lucide-react";
import Link from "next/link";

const HtmlContent = dynamic(() => import("./html-content"));

type TSingleBlog = {
  blog: BlogPost & { contentHtml: string };
};

const SingleBlog: React.FC<TSingleBlog> = ({ blog }) => {
  return (
    <section className=" relative">
      <div className=" md:hidden flex items-center justify-between mb-3 sticky top-0 left-0 w-full dark:bg-black/60 bg-white/60 backdrop-blur z-10 p-4">
        <Author />

        <div className=" flex items-center gap-3">
          <Link href="/">
            <Home />
          </Link>
          <Social styles="" />
        </div>
      </div>
      <div className="w-[90%] md:w-[1000px] m-auto">
        <div className=" w-[95%] md:w-[70%] m-auto mb-8 mt-4">
          <div className="hidden md:flex items-center justify-between mb-3">
            <Author />

            <div className=" flex items-center gap-3">
              <Link href="/">
                <Home />
              </Link>
              <Social styles="" />
            </div>
          </div>
          <h1 className=" text-[22px] md:text-[28px] -mb-1 text-center mt-8 leading-snug">
            {blog.title}
          </h1>
          <p className=" text-small text-default-500 mt-[12px] flex items-center justify-center gap-2">
            <CalendarDays size={20} /> {blog.date}
          </p>
        </div>

        <div className="md:pl-[60px] mt-6 w-full flex items-center justify-center">
          <div className="  prose  prose-base md:prose-lg prose-neutral dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-lg">
            <HtmlContent>{parse(blog.contentHtml)}</HtmlContent>
          </div>
        </div>

        <p className="pb-7 flex flex-col md:flex-row items-center gap-2 justify-center mt-6">
          Got any questions about this article?
          <a
            href="https://twitter.com/imbitcoinb"
            target="_blank"
            referrerPolicy="no-referrer"
            className=" text-primary-500 underline hover:text-primary-800"
          >
            Just reach me out here 😇
          </a>
        </p>

        <Footer />
      </div>
    </section>
  );
};

export default SingleBlog;
