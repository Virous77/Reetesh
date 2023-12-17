import { getServerData } from "@/api/server-api";
import SingleBlog from "@/components/blog/signle-blog/single-blog";

type TResponse = {
  status: boolean;
  blog: BlogPost & { contentHtml: string };
};

const SingleBlogPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const blog: TResponse = await getServerData({
    url: `http:localhost:3000/api/blog/${id}`,
    tag: id,
  });

  return <SingleBlog blog={blog.blog} />;
};

export default SingleBlogPage;
