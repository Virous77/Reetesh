import SingleBlog from "@/components/blog/signle-blog/single-blog";
import { getAllBlogPosts, getBlog } from "@/lib/post";
import { commonMetaData } from "@/utils/utils";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await getBlog(params.id);

  const makeTitle = (title: string) => title.replace(/\s+/g, "-").toLowerCase();
  const metaData = commonMetaData({
    name: blog.title,
    desc: blog.about,
    image: blog.blogImage,
    url: `/blog/${makeTitle(blog.title)}`,
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
