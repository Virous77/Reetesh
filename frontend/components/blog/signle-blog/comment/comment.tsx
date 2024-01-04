import { getServerData } from "@/api/server-api";
import CommentForm from "./comment-form";
import CommentList from "./comment-list";

export type TComments = {
  data: {
    _id: string;
    blogId: string;
    comment: string;
    userId: string;
    createdAt: string;
  }[];
  message: string;
  status: boolean;
};

const Comment = async ({ slug }: { slug: string }) => {
  const data: TComments = await getServerData({
    endpoint: `/comment/${slug}`,
    tag: "comments",
  });
  return (
    <div className=" px-3 md:px-0">
      <span className=" bg-accent h-[2px] w-full inline-block mb-3"></span>
      <h2 className=" text-lg text-heading pb-2">
        Comments ({data.data.length || 0})
      </h2>
      <CommentForm />
      <CommentList data={data} />
      <span className=" bg-accent h-[2px] w-full inline-block mb-3"></span>
    </div>
  );
};

export default Comment;
