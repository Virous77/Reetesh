import { allPosts, Post } from '@/.contentlayer/generated';
import { Link } from 'next-view-transitions';

type TReadMore = {
  slug: string;
  relatedBlogs: Post[];
};

const getNeighbours = (slug: string) => {
  const posts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const index = posts.findIndex((post) => post.slugAsParams === slug);

  return [
    { label: 'Newer', post: posts[index - 1] },
    { label: 'Older', post: posts[index + 1] },
  ].filter(({ post }) => post);
};

const ReadMore: React.FC<TReadMore> = ({ slug, relatedBlogs }) => {
  const neighbours = getNeighbours(slug);
  const neighbourSlugs = neighbours.map(({ post }) => post.slugAsParams);
  const related = relatedBlogs
    .filter((post) => !neighbourSlugs.includes(post.slugAsParams))
    .slice(0, 3)
    .map((post) => ({ label: 'Related', post }));

  return (
    <section className="mt-14">
      <h2 className="home-soft mb-2 text-sm">Keep reading</h2>
      <ul>
        {[...neighbours, ...related].map(({ label, post }) => (
          <li key={post.slugAsParams}>
            <Link href={`/blog/${post.slugAsParams}`} className="blog-row">
              <span className="blog-row-title">
                <span className="home-row-title">{post.title}</span>
                <span className="home-soft shrink-0 text-sm">{label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReadMore;
