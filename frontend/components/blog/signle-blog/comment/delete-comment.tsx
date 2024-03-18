import { trpc } from '@/trpc-client/client';
import { Trash2 } from 'lucide-react';
import React from 'react';
import action from './action';

type TDeleteComment = {
  userId: string | null;
  commentId: string;
  blogId: string;
};

const DeleteComment: React.FC<TDeleteComment> = ({
  userId,
  commentId,
  blogId,
}) => {
  const { mutateAsync } = trpc.blogs.deleteComment.useMutation();
  const handleDelete = async () => {
    try {
      await mutateAsync({ commentId, userId: userId ? userId : '' });
      action(blogId);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message || 'An error occurred, please try again');
      }
      alert('An error occurred, please try again');
    }
  };
  return (
    <span
      className=" flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full hover:bg-accent"
      onClick={handleDelete}
    >
      <Trash2 size={18} />
    </span>
  );
};

export default DeleteComment;
