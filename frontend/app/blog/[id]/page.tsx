import { allPosts } from '@/.contentlayer/generated';
import SingleBlog from '@/components/blog/signle-blog/single-blog';
import { commonMetaData } from '@/utils/utils';
import { notFound } from 'next/navigation';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  fallback: ['Poppins', 'sans-serif', 'ui-sans-serif', 'system-ui'],
});

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({
    id: post.slugAsParams,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
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
}

const SingleBlogPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const blog = allPosts.find((post) => post.slugAsParams === id);
  const relatedBlogs =
    allPosts.filter(
      (post) => post.related === blog?.related && blog._id !== post._id
    ) || [];

  if (!blog) return notFound();

  return (
    <main className={`relative ${merriweather.className}`}>
      <SingleBlog blog={blog} relatedBlogs={relatedBlogs.slice(0, 5)} />
    </main>
  );
};

export default SingleBlogPage;
