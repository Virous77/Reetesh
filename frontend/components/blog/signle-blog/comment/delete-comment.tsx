import { Trash2 } from 'lucide-react';
import React from 'react';
import action from './action';
import { useMutation } from '@tanstack/react-query';
import { deleteCommentAction } from './delete-action';
import { Button } from '@/components/ui/button';
import { ToolTipComp } from '@/components/ui/tooltip';

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
  const { mutate, isPending } = useMutation({
    mutationFn: deleteCommentAction,
    onSuccess: () => {
      action(blogId);
    },
    onError: (error) => {
      alert(error.message || 'Failed to delete comment');
    },
  });

  const handleDelete = () => {
    mutate({ commentId, userId: userId ? userId : '' });
  };

  return (
    <ToolTipComp name="Delete">
      <Button
        size="icon"
        disabled={isPending || commentId.includes('opt_')}
        className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-transparent text-secondary-foreground hover:bg-accent"
        onClick={handleDelete}
      >
        <Trash2 size={18} />
      </Button>
    </ToolTipComp>
  );
};

export default DeleteComment;
