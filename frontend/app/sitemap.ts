import { getAllBlogPosts } from "@/lib/post";

export default async function sitemap() {
  const blogs = await getAllBlogPosts();
  const URL = "https://reetesh.vercel.app";

  const restUrls = [
    { url: `${URL}/`, lastModified: new Date() },
    { url: `${URL}/blogs`, lastModified: new Date() },
    { url: `${URL}/projects`, lastModified: new Date() },
    { url: `${URL}/skills`, lastModified: new Date() },
  ];

  const allBlogs = blogs.map(({ title, date }) => {
    const makeTile = (title: string) =>
      title.replace(/\s+/g, "-").toLowerCase();
    return {
      url: `${URL}/blog/${makeTile(title)}`,
      lastModified: new Date(date),
    };
  });

  return [...restUrls, ...allBlogs];
}
