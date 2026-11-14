import { addUserIDToLocalStorage, adminID, getLocalData } from '@/utils/utils';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react';
import DeleteComment from './delete-comment';
import { useMutation } from '@tanstack/react-query';
import { addLikeAction } from './like-action';

type TLike = {
  like: string[];
  dislike: string[];
  id: string;
  blogUserId: string;
  reply: boolean;
  onClick: () => void;
};

const Like: React.FC<TLike> = ({
  id,
  like,
  dislike,
  blogUserId,
  reply,
  onClick,
}) => {
  // Comments only render in the browser (ssr: false), so storage is ready here.
  const [userId] = React.useState<string | null>(
    () => getLocalData('tempId') || null
  );

  const { mutate } = useMutation({
    mutationFn: addLikeAction,
    onSuccess: (result) => {
      if ('error' in result) alert(result.error);
    },
    onError: (error) => {
      alert(error.message || 'Failed to like');
    },
  });

  const handleLike = async (type: 'like' | 'dislike') => {
    const tempId = addUserIDToLocalStorage(userId || '');
    mutate({
      commentId: id,
      userId: userId || tempId,
      type,
    });
  };

  const pending = id.includes('opt_');
  const liked = like?.includes(userId || '');
  const disliked = dislike?.includes(userId || '');

  return (
    <div className="comment-actions">
      <button
        type="button"
        className="comment-action"
        data-active={liked}
        aria-pressed={liked}
        aria-label="Like comment"
        onClick={() => handleLike('like')}
        disabled={pending}
      >
        <ThumbsUp size={14} aria-hidden="true" />
        <span className="tabular-nums">{like?.length ?? 0}</span>
      </button>
      <button
        type="button"
        className="comment-action"
        data-active={disliked}
        aria-pressed={disliked}
        aria-label="Dislike comment"
        onClick={() => handleLike('dislike')}
        disabled={pending}
      >
        <ThumbsDown size={14} aria-hidden="true" />
        <span className="tabular-nums">{dislike?.length ?? 0}</span>
      </button>
      <button
        type="button"
        className="comment-action"
        onClick={onClick}
        disabled={pending}
      >
        {reply ? 'Cancel' : 'Reply'}
      </button>
      {(blogUserId === userId || adminID.includes(userId || '')) && (
        <DeleteComment commentId={id} userId={userId} />
      )}
    </div>
  );
};

export default Like;
