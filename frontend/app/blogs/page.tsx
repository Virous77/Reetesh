import Blog from "@/components/blog/blog";
import Sidebar from "@/components/blog/sidebar";
import { allPosts } from "@/.contentlayer/generated";

const BlogPage = async () => {
  if (allPosts.length === 0) return <div>There are no posts yet</div>;
  const blogs = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <main className=" md:grid flex l-template items-start gap-4 h-fit md:h-screen md:p-[30px] relative flex-col pb-4 md:pb-0">
      <Blog blogs={blogs} />
      <Sidebar />
    </main>
  );
};

export default BlogPage;
