import { getAllBlogPosts } from "@/lib/post";

export default async function sitemap() {
  const blogs = await getAllBlogPosts();

  const URL = "https://reetesh.vercel.app";
  const allBlogs = blogs.map(({ title, date }) => {
    const makeTile = (title: string) =>
      title.replace(/\s+/g, "-").toLowerCase();
    return {
      url: `${URL}/blog/${makeTile(title)}`,
      lastModified: new Date(date),
    };
  });

  return [...allBlogs];
}
