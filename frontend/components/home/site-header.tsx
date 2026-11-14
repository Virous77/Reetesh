import { allPosts } from '@/.contentlayer/generated';
import SiteNav from './site-nav';

const SiteHeader = () => {
  const posts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ _id, title, slugAsParams, date }) => ({
      _id,
      title,
      slugAsParams,
      month: new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Kolkata',
      }),
    }));

  return <SiteNav posts={posts} />;
};

export default SiteHeader;
