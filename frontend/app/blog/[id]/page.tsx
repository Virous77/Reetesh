import { getServerData } from "@/api/server-api";
import SingleBlog from "@/components/blog/signle-blog/single-blog";
import { getBlog } from "@/lib/post";
import { commonMetaData } from "@/utils/utils";

type TResponse = {
  status: boolean;
  blog: BlogPost & { contentHtml: string };
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await getBlog(params.id);
  const metaData = commonMetaData({
    name: blog.title,
    desc: blog.about,
    image: blog.blogImage,
  });
  return {
    ...metaData,
  };
}

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
