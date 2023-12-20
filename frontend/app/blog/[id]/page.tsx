import SingleBlog from "@/components/blog/signle-blog/single-blog";
import { getBlog } from "@/lib/post";
import { commonMetaData } from "@/utils/utils";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await getBlog(params.id);

  const makeTile = (title: string) => title.replace(/\s+/g, "-").toLowerCase();
  const metaData = commonMetaData({
    name: blog.title,
    desc: blog.about,
    image: blog.blogImage,
    url: `/${makeTile(blog.title)}`,
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
  const blog = await getBlog(id);
  return <SingleBlog blog={blog} />;
};

export default SingleBlogPage;
