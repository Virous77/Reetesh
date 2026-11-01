import { allPosts } from '@/.contentlayer/generated';
import SingleBlog from '@/components/blog/signle-blog/single-blog';
import { commonMetaData } from '@/utils/utils';
import { redirect } from 'next/navigation';
import { BlogPageReadTracker } from '@/components/common/motion';
import PageShell from '@/components/home/page-shell';

export const generateStaticParams = async () => {
  const posts = allPosts;

  return posts.map((post) => ({
    id: post.slugAsParams,
  }));
};

export const generateMetadata = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const params = await props.params;
  const blog = allPosts.find((post) => post.slugAsParams === params.id);

  const metaData = commonMetaData({
    name: blog?.title || 'Not Found | Reetesh Kumar',
    desc: blog?.about || 'This blog is not found.',
    image: blog?.blogImage || '',
    url: `/blog/${blog?.slugAsParams}`,
    keywords: blog?.tags || [],
  });
  return {
    ...metaData,
  };
};

const SingleBlogPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;

  const { id } = params;

  const blog = allPosts.find((post) => post.slugAsParams === id);
  const relatedBlogs =
    allPosts.filter(
      (post) => post.related === blog?.related && blog._id !== post._id
    ) || [];

  if (!blog) return redirect('/blogs');

  return (
    <PageShell>
      <BlogPageReadTracker className="progress-bar" />
      <SingleBlog blog={blog} relatedBlogs={relatedBlogs.slice(0, 5)} />
    </PageShell>
  );
};

export default SingleBlogPage;
