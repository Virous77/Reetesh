export const revalidate = 3600;

import { allPosts } from '@/.contentlayer/generated';
import { githubAction } from '@/components/common/action';
import Home from '@/components/home/home';
import GrainOverlay from '@/components/ui/grain-overlay';
import { formateDate } from '@/utils/utils';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

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
  const stats = await getStats();
  const posts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)
    .map((post) => ({
      slug: post.slugAsParams,
      title: post.title,
      date: formateDate(post.date),
    }));

  return (
    <div className={`home ${bricolage.variable}`}>
      <div className="home-glow" aria-hidden="true">
        <span />
        <span />
      </div>
      <Home posts={posts} stats={stats} />
      <GrainOverlay />
    </div>
  );
};

export default Page;
