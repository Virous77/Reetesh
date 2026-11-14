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

const Comment = async ({ slug }: { slug: string }) => {
  const data = await getComments({ id: slug });

  return (
    <section className="comment-section border-t border-(--home-border) pt-10">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="text-[1.15rem] font-medium">
          Discussion{' '}
          <span className="home-faint font-mono text-sm">
            ({data.length || 0})
          </span>
        </h2>
        <span className="home-faint font-mono text-xs">Markdown supported</span>
      </div>

      <CommentProvider data={data} />
    </section>
  );
};

export default Comment;
