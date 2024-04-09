import { allPosts } from '@/.contentlayer/generated';
import { Mdx } from '../blog/signle-blog/mdx';

const Content = () => {
  return (
    <section className=" overflow-y-scroll md:h-[85vh] md:p-4 lg:border-l lg:border-r">
      <div className="box-fit prose-headings:font-cal prose prose-base prose-neutral mt-6 dark:prose-invert prose-a:whitespace-nowrap prose-a:text-default prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-defaultMax prose-blockquote:font-light prose-img:rounded-lg">
        <Mdx code={allPosts[0].body.code} />
      </div>
    </section>
  );
};

export default Content;
