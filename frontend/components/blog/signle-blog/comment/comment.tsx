import CommentForm from './comment-form';
import CommentList from './comment-list';
import { serverClient } from '@/trpc-client/server';

export const Comment = async ({ slug }: { slug: string }) => {
  const data = await serverClient.blogs.getComments({ id: slug });

  return (
    <div className=" px-3 md:px-0">
      <span className=" mb-3 inline-block h-[2px] w-full bg-accent"></span>
      <h2 className=" pb-2 text-lg text-heading">
        Comments ({data.length || 0})
      </h2>
      <CommentForm />
      <CommentList data={data} />
      <span className=" mb-3 inline-block h-[2px] w-full bg-accent"></span>
    </div>
  );
};

export default Comment;
