import { Trash2 } from 'lucide-react';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { deleteCommentAction } from './delete-action';

type TDeleteComment = {
  userId: string | null;
  commentId: string;
};

const DeleteComment: React.FC<TDeleteComment> = ({ userId, commentId }) => {
  const { mutate, isPending } = useMutation({
    mutationFn: deleteCommentAction,
    onSuccess: (result) => {
      if ('error' in result) alert(result.error);
    },
    onError: (error) => {
      alert(error.message || 'Failed to delete comment');
    },
  });

  const handleDelete = () => {
    mutate({ commentId, userId: userId ? userId : '' });
  };

  return (
    <button
      type="button"
      className="comment-action ml-auto"
      disabled={isPending || commentId.includes('opt_')}
      onClick={handleDelete}
      aria-label="Delete comment"
      title="Delete comment"
    >
      <Trash2 size={14} aria-hidden="true" />
    </button>
  );
};

export default DeleteComment;
