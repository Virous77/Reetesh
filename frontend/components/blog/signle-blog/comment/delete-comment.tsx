import { Trash2 } from 'lucide-react';
import React from 'react';
import action from './action';
import { useMutation } from '@tanstack/react-query';
import { deleteCommentAction } from './delete-action';

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
  const { mutate } = useMutation({
    mutationFn: deleteCommentAction,
    onSuccess: () => {
      action(blogId);
    },
    onError: (data: any) => {
      alert(data.message || 'Failed to delete comment');
    },
  });

  const handleDelete = () => {
    mutate({ commentId, userId: userId ? userId : '' });
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
