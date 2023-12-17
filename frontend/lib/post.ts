import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import blogJson from "../lib/blog.json";

const postsDirectory = path.join(process.cwd(), "blog-posts");

const common = (matterResult: matter.GrayMatterFile<string>) => {
  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    authorImage: matterResult.data.authorImage,
    blogImage: matterResult.data.blogImage,
    about: matterResult.data.about,
  };
};

export async function getAllBlogPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      ...common(matterResult),
    };

    return blogPost;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

type PreRenderingInfo = {
  [key: string]: string;
};

export async function getBlog(id: string) {
  const p = blogJson as PreRenderingInfo;
  const fullPath = path.join(postsDirectory, `${p[id]}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id: p[id],
    contentHtml,
    ...common(matterResult),
  };

  return blogPostWithHTML;
}
