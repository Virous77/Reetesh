import Blog from '@/components/blog/blog';
import Sidebar from '@/components/blog/sidebar';
import { allPosts } from '@/.contentlayer/generated';

const BlogPage = async () => {
  if (allPosts.length === 0) return <div>There are no posts yet</div>;
  const blogs = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <main className="fade-in-out l-template relative flex h-fit flex-col items-start gap-4 pb-4 md:grid md:px-[30px] md:py-[30px] md:pt-0 md:pb-20 lg:pb-5">
      <Blog blogs={blogs} />
      <Sidebar />
    </main>
  );
};

export default BlogPage;
