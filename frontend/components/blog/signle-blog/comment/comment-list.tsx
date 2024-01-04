import { formateDate } from "@/utils/utils";
import { getServerData } from "@/api/server-api";

const CommentList = async () => {
  const data = await getServerData({ endpoint: "/projects", tag: "comments" });

  console.log(data);

  const comments = [
    {
      id: 1,
      name: "28",
      message: "This is a comment",
      date: "2021-10-10",
    },
    {
      id: 2,
      name: "cE",
      message: "We are testing this comment",
      date: "2022-08-17",
    },
    {
      id: 3,
      name: "rr",
      message: "We are leaning new things",
      date: "2023-08-27",
    },
  ];

  return (
    <div className=" mt-3">
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-[20px] text-heading font-bold">
              {comment.name}
            </span>
          </div>
          <div>
            <p className="">{comment.message}</p>
            <p className="text-[12px] text-default">
              {formateDate(comment.date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
