export const revalidate = 3600;

import { allPosts } from '@/.contentlayer/generated';
import { githubAction } from '@/components/common/action';
import Home from '@/components/home/home';
import PageShell from '@/components/home/page-shell';
import { getContributions } from '@/lib/contributions';
import { formateDate } from '@/utils/utils';

const getStats = async () => {
  try {
    const { stats } = await githubAction();
    return {
      contributions: stats.totalContributions,
      streak: stats.currentStreak.length,
    };
  } catch {
    return null;
  }
};

const Page = async () => {
  const [stats, contributions] = await Promise.all([
    getStats(),
    getContributions(),
  ]);
  const posts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)
    .map((post) => ({
      slug: post.slugAsParams,
      title: post.title,
      date: formateDate(post.date),
    }));

  return (
    <PageShell>
      <Home posts={posts} stats={stats} contributions={contributions} />
    </PageShell>
  );
};

export default Page;
