import CommentForm from "./comment-form";
import CommentList from "./comment-list";

const Comment = () => {
  return (
    <div className=" px-3 md:px-0">
      <span className=" bg-accent h-[2px] w-full inline-block mb-3"></span>
      <h2 className=" text-lg text-heading pb-2">Comments (10)</h2>
      <CommentForm />
      <CommentList />
      <span className=" bg-accent h-[2px] w-full inline-block mb-3"></span>
    </div>
  );
};

export default Comment;
