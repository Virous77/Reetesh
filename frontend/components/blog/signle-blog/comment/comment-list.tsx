import { TBlog } from '@/models/blog-comments';
import { formateDate } from '@/utils/utils';
import CommentMarkdown from './comment-markdown';
import Like from './like';
import AuthorImage from '@/components/common/author-image';

const CommentList = async ({ data }: { data: TBlog[] }) => {
  if (data.length === 0)
    return <p className=" pb-2 pt-4 text-center">No comments yet</p>;

  const adminID = [
    '47256c97-2118-40da-9494-20ffa5dfb044',
    '286d1fb9-7d5b-473f-8e7d-d612bb5736cd',
  ];

  return (
    <div className=" mt-4 max-h-[520px] overflow-y-scroll">
      <div className=" max-h-[700px] overflow-scroll">
        {data.map((comment) => (
          <div
            key={comment._id.toString()}
            className="grid-cols-custom mb-4 grid items-start gap-3"
          >
            {!adminID.includes(comment.userId.toLowerCase()) ? (
              <div className="flex h-[40px]  w-[40px] items-center justify-center rounded-full bg-gray-200">
                <span className="text-[18px] font-bold text-heading">
                  {comment.userId.slice(0, 2)}
                </span>
              </div>
            ) : (
              <AuthorImage />
            )}
            <div className=" overflow-scroll">
              <div className="just-way box-fit prose-headings:font-cal prose prose-base prose-neutral  dark:prose-invert prose-a:whitespace-nowrap prose-a:text-default prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-defaultMax prose-blockquote:font-light prose-img:rounded-lg">
                <CommentMarkdown comment={comment.comment} />
              </div>

              <div className=" mt-2 flex  flex-col">
                <Like
                  id={comment._id.toString()}
                  like={comment.like}
                  dislike={comment.dislike}
                  blogId={comment.blogId}
                  blogUserId={comment.userId}
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
