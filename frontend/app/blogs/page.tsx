import { allPosts, Post } from '@/.contentlayer/generated';
import BlogIndex from '@/components/blog/blog-index';
import PageShell from '@/components/home/page-shell';

const TOPIC_MATCHERS = {
  nextjs: /next\.?js/i,
  react: /\breact\b|tanstack/i,
  ai: /\bai\b|\bmcp\b|claude|gemini|agentic|subagent/i,
  backend:
    /node\.?js|express|\bbun\b|hono|kafka|nginx|docker|kubernetes|\brest api|mongodb|postgres|drizzle|turso|neon|yaml|stripe|rate limit/i,
};

const getTopics = (post: Post) =>
  Object.entries(TOPIC_MATCHERS)
    .filter(([, matcher]) => matcher.test(post.title))
    .map(([topic]) => topic);

// Contentlayer stores midnight in the build machine's timezone, so a fixed zone
// keeps dates the same on a local build and on Vercel.
const TIME_ZONE = 'Asia/Kolkata';

const BlogPage = () => {
  const posts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => {
      const date = new Date(post.date);
      return {
        _id: post._id,
        title: post.title,
        slugAsParams: post.slugAsParams,
        about: post.about,
        image: post.blogImage,
        year: date.toLocaleDateString('en-US', {
          year: 'numeric',
          timeZone: TIME_ZONE,
        }),
        day: date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          timeZone: TIME_ZONE,
        }),
        topics: getTopics(post),
      };
    });

  return (
    <PageShell>
      <BlogIndex posts={posts} />
    </PageShell>
  );
};

export default BlogPage;
