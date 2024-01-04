import { formateDate } from "@/utils/utils";
import { TComments } from "./comment";

const CommentList = async ({ data }: { data: TComments }) => {
  if (!data.status || data.data.length === 0)
    return <p className=" pt-4 text-center pb-2">No comments yet</p>;

  return (
    <div className=" mt-3">
      <div className=" max-h-[700px] overflow-scroll">
        {data.data.map((comment) => (
          <div
            key={comment._id}
            className="grid grid-cols-custom items-start gap-3 mb-4"
          >
            <div className="w-[40px] h-[40px]  rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-[18px] text-heading font-bold">
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
