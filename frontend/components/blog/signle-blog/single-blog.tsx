"use server";

import Author from "@/components/common/author";
import Social from "@/components/social/social";
import Footer from "@/components/contact/footer";
import { CalendarDays, Newspaper } from "lucide-react";
import Link from "next/link";
import { Post } from "@/.contentlayer/generated";
import { Mdx } from "./mdx";
import { formateDate } from "@/utils/utils";

type TSingleBlog = {
  blog: Post;
};

const SingleBlog: React.FC<TSingleBlog> = ({ blog }) => {
  return (
    <section className=" relative">
      <div className=" md:hidden flex items-center justify-between mb-3 sticky top-0 left-0 w-full dark:bg-black/60 bg-white/60 backdrop-blur z-10 p-4">
        <Author />

        <div className=" flex items-center gap-3">
          <Link href="/blogs" aria-label="blogs">
            <Newspaper />
          </Link>
          <Social styles="" />
        </div>
      </div>
      <>
        <div className=" box-fit mb-8 mt-4">
          <div className="hidden md:flex items-center justify-between mb-3">
            <Author />

            <div className=" flex items-center gap-3">
              <Link href="/blogs">
                <Newspaper />
              </Link>
              <Social styles="" />
            </div>
          </div>
          <h1 className=" text-[26px] font-bold md:text-[32px] -mb-1 text-center mt-8 leading-snug w-[90%] m-auto">
            {blog.title}
          </h1>
          <p className=" text-small text-default mt-[12px] flex items-center justify-center gap-2">
            <CalendarDays size={20} /> {formateDate(blog.date)}
          </p>
        </div>

        <div className="mt-6 w-full flex items-center justify-center">
          <div className="blog-size prose prose-base prose-neutral dark:prose-invert prose-a:whitespace-nowrap prose-a:underline prose-a:underline-offset-4 prose-a:text-default hover:prose-a:text-defaultMax prose-img:rounded-lg prose-headings:font-cal prose-blockquote:font-light">
            <Mdx code={blog.body.code} />
          </div>
        </div>

        <p className="pb-7 flex flex-col md:flex-row items-center gap-2 justify-center mt-6">
          Got any questions about this article?
          <a
            href="https://twitter.com/imbitcoinb"
            target="_blank"
            referrerPolicy="no-referrer"
            className=" text-primary underline underline-offset-4 "
          >
            Just reach me out here 😇
          </a>
        </p>

        <Footer />
      </>
    </section>
  );
};

export default SingleBlog;
