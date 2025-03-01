import dbConnect from '@/db/mongoose';
import blogComments, { TBlog } from '@/models/blog-comments';
import CommentProvider from './comment-provider';

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

  // TODO: Add types
  const comments: any[] = await blogComments
    .find({ blogId: id, parent: null })
    .sort({ createdAt: -1 })
    .populate(createPopulateOptions(20))
    .lean();

  return JSON.parse(JSON.stringify(comments)) as TBlog[];
};

export const Comment = async ({ slug }: { slug: string }) => {
  const data = await getComments({ id: slug });

  return (
    <section className="comment-section px-3 md:px-0">
      <span className="bg-accent mb-3 inline-block h-[2px] w-full"></span>

      <h2 className="text-heading pb-2 text-lg">
        Comments ({data.length || 0})
      </h2>

      <CommentProvider data={data} />
      <span className="bg-accent mb-3 inline-block h-[2px] w-full"></span>
    </section>
  );
};

export default Comment;
