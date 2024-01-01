import { allPosts } from "@/.contentlayer/generated";
import SingleBlog from "@/components/blog/signle-blog/single-blog";
import { commonMetaData } from "@/utils/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({
    id: post.slugAsParams,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = allPosts.find((post) => post.slugAsParams === params.id);

  const metaData = commonMetaData({
    name: blog?.title || "Not Found | Reetesh Kumar",
    desc: blog?.about || "This blog is not found.",
    image: blog?.blogImage || "",
    url: `/blog/${blog?.slugAsParams}`,
    keywords: blog?.tags || [],
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
  const blog = allPosts.find((post) => post.slugAsParams === id);

  if (!blog) return notFound();

  return <SingleBlog blog={blog} />;
};

export default SingleBlogPage;
