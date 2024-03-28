import { Post } from '@/.contentlayer/generated';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

const RelatedPost = ({ relatedBlogs }: { relatedBlogs: Post[] }) => {
  const posts = relatedBlogs;

  return (
    <section className=" p-3 md:mb-6 md:p-0">
      <h1 className=" text-xl text-heading underline underline-offset-4">
        Related Posts
      </h1>
      <div className=" mt-4 flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap">
        {posts.slice(0, 5).map((post) => (
          <Card key={post.slug}>
            <CardContent className=" m-0 h-fit w-full p-0 md:w-[350px]">
              <Link href={`/blog/${post.slugAsParams}`}>
                <Image
                  alt="blog thumbnail"
                  src={post.blogImage}
                  width={100}
                  height={100}
                  className="rounded-lg"
                  sizes="100vw"
                  style={{ width: '100%', height: '220px' }}
                />
                <h1 className=" mt-2 p-2 pt-0 text-[18px]">{post.title}</h1>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedPost;
