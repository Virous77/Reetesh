import { TBlog } from '@/models/blog-comments';
import { formateDate } from '@/utils/utils';
import CommentMarkdown from './comment-markdown';
import Like from './like';

const CommentList = async ({ data }: { data: TBlog[] }) => {
  if (data.length === 0)
    return <p className=" pb-2 pt-4 text-center">No comments yet</p>;

  return (
    <div className=" mt-4 max-h-[520px] overflow-y-scroll">
      <div className=" max-h-[700px] overflow-scroll">
        {data.map((comment) => (
          <div
            key={comment._id}
            className="grid-cols-custom mb-4 grid items-start gap-3"
          >
            <div className="flex h-[40px]  w-[40px] items-center justify-center rounded-full bg-gray-200">
              <span className="text-[18px] font-bold text-heading">
                {comment.userId.slice(0, 2)}
              </span>
            </div>
            <div>
              <div className="just-way box-fit prose-headings:font-cal prose prose-base prose-neutral  dark:prose-invert prose-a:whitespace-nowrap prose-a:text-default prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-defaultMax prose-blockquote:font-light prose-img:rounded-lg">
                <CommentMarkdown comment={comment.comment} />
              </div>

              <div className=" mt-2 flex  flex-col">
                <Like
                  id={comment._id.toString()}
                  like={comment.like}
                  dislike={comment.dislike}
                  blogId={comment.blogId}
                />
                <p className=" text-[12px] text-default">
                  {formateDate(comment.createdAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
