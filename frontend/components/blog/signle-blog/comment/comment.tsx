import dbConnect from '@/db/mongoose';
import CommentForm from './comment-form';
import CommentList from './comment-list';
import blogComments, { TBlog } from '@/models/blog-comments';

const getComments = async ({ id }: { id: string }) => {
  await dbConnect();
  const comments: TBlog[] = await blogComments
    .find({ blogId: id })
    .sort({ createdAt: -1 });
  return comments;
};

export const Comment = async ({ slug }: { slug: string }) => {
  const data = await getComments({ id: slug });

  return (
    <section className=" px-3 md:px-0">
      <span className=" mb-3 inline-block h-[2px] w-full bg-accent"></span>
      <div className=" flex  items-center justify-between md:w-[85%]">
        <h2 className=" pb-2 text-lg text-heading">
          Comments ({data.length || 0})
        </h2>

        <span className=" text-[12px]">Markdown is supported.*</span>
      </div>
      <CommentForm />
      <CommentList data={data} />
      <span className=" mb-3 inline-block h-[2px] w-full bg-accent"></span>
    </section>
  );
};

export default Comment;
