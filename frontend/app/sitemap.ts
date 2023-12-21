import { getAllBlogPosts } from "@/lib/post";

export default async function sitemap() {
  const blogs = await getAllBlogPosts();
  const URL = "https://reetesh.vercel.app";

  const restUrls = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/blogs`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${URL}/projects`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${URL}/skills`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
  ];

  const allBlogs = blogs.map(({ title, date }) => {
    const makeTile = (title: string) =>
      title.replace(/\s+/g, "-").toLowerCase();
    return {
      url: `${URL}/blog/${makeTile(title)}`,
      lastModified: new Date(date),
      priority: 0.64,
      changeFrequency: "daily",
    };
  });

  return [...restUrls, ...allBlogs];
}
