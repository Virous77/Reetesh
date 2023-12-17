import Blog from "@/components/blog/blog";
import Sidebar from "@/components/blog/sidebar";
import { getAllBlogPosts } from "@/lib/post";

const BlogPage = async () => {
  const blogs = await getAllBlogPosts();

  return (
    <main className=" md:grid flex l-template items-start gap-4 h-fit md:h-screen md:p-[30px] relative flex-col pb-4 md:pb-0">
      <Blog blogs={blogs} />
      <Sidebar />
    </main>
  );
};

export default BlogPage;
