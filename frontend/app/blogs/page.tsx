import { getServerData } from "@/api/server-api";
import Blog from "@/components/blog/blog";
import Sidebar from "@/components/blog/sidebar";
import { commonMetaData } from "@/utils/utils";

type TResponse = {
  status: boolean;
  blogs: BlogPost[];
};

export async function generateMetadata() {
  const metaData = commonMetaData({
    name: "Reetesh | Blogs",
    desc: "Explore the digital realm of Reetesh Kumar, a seasoned full-stack developer. Immerse yourself in a collection of insightful blogs, meticulously crafted to share expertise and experiences in the ever-evolving landscape of web development. Welcome to a space where technology meets creativity, and where i unveils the artistry of code and the insights gained on the journey of becoming a proficient full-stack developer.",
    image: "https://avatars.githubusercontent.com/u/101452588?v=4",
  });
  return {
    ...metaData,
  };
}

const BlogPage = async () => {
  const blogs: TResponse = await getServerData({
    url: "http:localhost:3000/api/blogs",
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
