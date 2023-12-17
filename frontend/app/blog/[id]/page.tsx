import { getServerData } from "@/api/server-api";

type TResponse = {
  status: boolean;
  blog: BlogPost;
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

  return <div>SingleBlogPage</div>;
};

export default SingleBlogPage;
