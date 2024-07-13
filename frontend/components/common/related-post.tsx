import { Post } from '@/.contentlayer/generated';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { BlogDetails } from '@/routes';

const RelatedPost = ({ relatedBlogs }: { relatedBlogs: Post[] }) => {
  const posts = relatedBlogs;

  return (
    <section className="w-full rounded-[30px] bg-accent p-3 py-5 md:mb-6 md:p-5">
      <h1 className="text-xl text-heading underline underline-offset-4">
        Related Posts
      </h1>
      <div className="mt-4 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 5).map((post) => (
          <Card
            key={post.slug}
            className="rounded-[25px] transition-all duration-700 hover:scale-105"
          >
            <CardContent className="m-0 h-fit w-full p-0">
              <BlogDetails.Link id={post.slugAsParams}>
                <Image
                  alt="blog thumbnail"
                  src={post.blogImage}
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="rounded-t-[25px]"
                  style={{ width: '100%', height: '220px' }}
                />
                <h1 className="mt-2 p-2 pt-0 text-[1.125rem] font-[500]">
                  {post.title}
                </h1>
              </BlogDetails.Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedPost;
