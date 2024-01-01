"use server";

import Author from "@/components/common/author";
import Social from "@/components/social/social";
import Footer from "@/components/contact/footer";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { Post } from "@/.contentlayer/generated";
import { Mdx } from "./mdx";
import Views from "./views";

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
      <div style={{ maxWidth: "750px", margin: "auto" }}>
        <div className="w-full mb-8 mt-4">
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
          <Views date={blog.date} slug={blog.slugAsParams} />
        </div>

        <div className="box-fit mt-6 prose prose-base prose-neutral dark:prose-invert prose-a:whitespace-nowrap prose-a:underline prose-a:underline-offset-4 prose-a:text-default hover:prose-a:text-defaultMax prose-img:rounded-lg prose-headings:font-cal prose-blockquote:font-light">
          <Mdx code={blog.body.code} />
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
      </div>
    </section>
  );
};

export default SingleBlog;
