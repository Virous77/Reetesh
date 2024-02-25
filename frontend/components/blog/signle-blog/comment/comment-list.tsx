import { TBlog } from '@/models/blog-comments';
import { formateDate } from '@/utils/utils';

const CommentList = async ({ data }: { data: TBlog[] }) => {
  if (data.length === 0)
    return <p className=" pb-2 pt-4 text-center">No comments yet</p>;

  return (
    <div className=" mt-3">
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
              <p className="">{comment.comment}</p>
              <p className="text-[12px] text-default">
                {formateDate(comment.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
