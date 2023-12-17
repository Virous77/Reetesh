import { getServerData } from "@/api/server-api";
import Blog from "@/components/blog/blog";
import Sidebar from "@/components/blog/sidebar";

type TResponse = {
  status: boolean;
  blogs: BlogPost[];
};

const BlogPage = async () => {
  const blogs: TResponse = await getServerData({
    url: `${process.env.URL}/api/blogs`,
    tag: "blogs",
  });

  return (
    <main className=" md:grid flex l-template items-start gap-4 h-fit md:h-screen md:p-[30px] relative flex-col pb-4 md:pb-0">
      <Blog blogs={blogs?.blogs} />
      <Sidebar />
    </main>
  );
};

export default BlogPage;
