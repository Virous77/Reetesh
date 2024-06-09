import dbConnect from '@/db/mongoose';
import CommentList from './comment-list';
import blogComments, { TBlog } from '@/models/blog-comments';
import { SquareM } from 'lucide-react';

type TPopulateOptions = {
  path: string;
  options: { sort: { createdAt: number } };
  populate: TPopulateOptions;
};

const createPopulateOptions = (depth: number): TPopulateOptions => {
  let populateOptions: TPopulateOptions | null = null;
  for (let i = 0; i < depth; i++) {
    populateOptions = {
      path: 'children',
      options: { sort: { createdAt: -1 } },
      populate: populateOptions!,
    };
  }
  return populateOptions!;
};

const getComments = async ({ id }: { id: string }) => {
  await dbConnect();

  const comments: TBlog[] = await blogComments
    .find({ blogId: id, parent: null })
    .sort({ createdAt: -1 })
    .populate(createPopulateOptions(20))
    .lean();

  return JSON.parse(JSON.stringify(comments));
};

export const Comment = async ({ slug }: { slug: string }) => {
  const data = await getComments({ id: slug });

  return (
    <section className="comment-section px-3 md:px-0">
      <span className="mb-3 inline-block h-[2px] w-full bg-accent"></span>
      <div className="flex items-center justify-between md:w-[85%]">
        <h2 className="pb-2 text-lg text-heading">
          Comments ({data.length || 0})
        </h2>
        <span className="flex items-center text-[12px]">
          <SquareM size={16} />
          arkdown is supported.*
        </span>
      </div>
      <CommentList data={data} />
      <span className="mb-3 inline-block h-[2px] w-full bg-accent"></span>
    </section>
  );
};

export default Comment;
