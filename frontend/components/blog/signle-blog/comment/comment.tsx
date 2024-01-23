import CommentForm from "./comment-form";
import CommentList from "./comment-list";
import { serverClient } from "@/trpc-client/server";

const Comment = async ({ slug }: { slug: string }) => {
  const data = await serverClient.blogs.getComments({ id: slug });

  return (
    <div className=" px-3 md:px-0">
      <span className=" bg-accent h-[2px] w-full inline-block mb-3"></span>
      <h2 className=" text-lg text-heading pb-2">
        Comments ({data.length || 0})
      </h2>
      <CommentForm />
      <CommentList data={data} />
      <span className=" bg-accent h-[2px] w-full inline-block mb-3"></span>
    </div>
  );
};

export default Comment;
