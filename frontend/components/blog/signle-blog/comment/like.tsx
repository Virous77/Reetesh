import { generateUUID, getLocalData } from '@/utils/utils';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useLayoutEffect } from 'react';
import action from './action';
import DeleteComment from './delete-comment';
import { useMutation } from '@tanstack/react-query';
import { addLikeAction } from './like-action';
import { Button } from '@/components/ui/button';

type TLike = {
  like: string[];
  dislike: string[];
  id: string;
  blogId: string;
  blogUserId: string;
  reply: boolean;
  onClick: () => void;
};

const Like: React.FC<TLike> = ({
  id,
  like,
  dislike,
  blogId,
  blogUserId,
  reply,
  onClick,
}) => {
  const [userId, setUserId] = React.useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: addLikeAction,
    onSuccess: () => {
      action(blogId);
    },
    onError: (error) => {
      alert(error.message || 'Failed to like');
    },
  });

  const handleLike = async (type: 'like' | 'dislike') => {
    let tempId = '';
    if (!userId) {
      tempId = generateUUID();
      localStorage.setItem('tempId', JSON.stringify(tempId.toString()));
    }
    mutate({
      commentId: id,
      userId: userId ? userId : tempId,
      type,
    });
  };

  useLayoutEffect(() => {
    const userId = getLocalData('tempId');
    setUserId(userId);
  }, []);

  return (
    <div className=" flex items-end justify-between">
      <div className=" -ml-1 flex items-center gap-2">
        <div className=" flex items-center">
          <Button
            size={'icon'}
            className={`flex h-[30px] w-[30px] items-center justify-center rounded-full bg-transparent  text-secondary-foreground hover:bg-accent ${like?.includes(userId || '') ? 'text-heading' : ''}`}
            onClick={() => handleLike('like')}
            disabled={isPending || id.includes('opt_')}
          >
            <ThumbsUp size={18} cursor="pointer" />
          </Button>
          <p>{like?.length}</p>
        </div>

        <div className=" flex items-center">
          <Button
            size={'icon'}
            className={`flex h-[30px] w-[30px] items-center justify-center rounded-full bg-transparent text-secondary-foreground  hover:bg-accent ${
              dislike?.includes(userId || '') ? 'text-heading' : ''
            } `}
            onClick={() => handleLike('dislike')}
          >
            <ThumbsDown size={18} cursor="pointer" />
          </Button>
          <p>{dislike.length}</p>
        </div>

        <div className="flex items-center">
          <Button
            size={'icon'}
            className="flex h-[30px] w-[55px] cursor-pointer items-center justify-center rounded-full bg-transparent text-[15px] text-secondary-foreground  hover:bg-accent"
            onClick={onClick}
            disabled={isPending || id.includes('opt_')}
          >
            {reply ? 'Cancel' : 'Reply'}
          </Button>
        </div>
      </div>
      {blogUserId === userId && (
        <DeleteComment commentId={id} userId={userId} blogId={blogId} />
      )}
    </div>
  );
};

export default Like;
