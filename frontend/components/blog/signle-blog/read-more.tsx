import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';

type TReadMore = {
  slug: string;
};
const ReadMore: React.FC<TReadMore> = ({ slug }) => {
  const findNextAndPrevious = (params: string) => {
    const index = allPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .findIndex((post) => post.slugAsParams === params);
    const previous = allPosts[index - 1]?.slugAsParams;
    const next = allPosts[index + 1]?.slugAsParams;
    return { next, previous };
  };

  const { next, previous } = findNextAndPrevious(slug);

  return (
    <div className=" mx-2 mb-3 rounded border px-2 py-3 md:mx-0">
      <div className=" flex  items-center justify-between gap-4">
        <Link
          href={previous ? `/blog/${previous}` : '/blogs'}
          className=" font-bold underline underline-offset-4 hover:opacity-80"
          aria-label="Previous Post"
        >
          Previous Post
        </Link>
        <Link
          href={next ? `/blog/${next}` : '/blogs'}
          className=" font-bold underline underline-offset-4 hover:opacity-80"
          aria-label="Next Post"
        >
          Next Post
        </Link>
      </div>
    </div>
  );
};

export default ReadMore;
