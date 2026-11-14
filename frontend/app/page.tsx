export const revalidate = 3600;

import { allPosts } from '@/.contentlayer/generated';
import { githubAction } from '@/components/common/action';
import Home from '@/components/home/home';
import PageShell from '@/components/home/page-shell';
import { getContributions } from '@/lib/contributions';
import { formateDate } from '@/utils/utils';

const getStreak = async () => {
  try {
    const { stats } = await githubAction();
    return stats.currentStreak.length as number;
  } catch {
    return null;
  }
};

const Page = async () => {
  const [streak, contributions] = await Promise.all([
    getStreak(),
    getContributions(),
  ]);
  const posts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)
    .map((post) => ({
      slug: post.slugAsParams,
      title: post.title,
      date: formateDate(post.date),
      about: post.about,
    }));

  return (
    <PageShell>
      <Home
        posts={posts}
        postCount={allPosts.length}
        streak={streak}
        contributions={contributions}
      />
    </PageShell>
  );
};

export default Page;
