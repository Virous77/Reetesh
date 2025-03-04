import { addUserIDToLocalStorage, adminID, getLocalData } from '@/utils/utils';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useLayoutEffect } from 'react';
import action from './action';
import DeleteComment from './delete-comment';
import { useMutation } from '@tanstack/react-query';
import { addLikeAction } from './like-action';
import { Button } from '@/components/ui/button';
import { ToolTipComp } from '@/components/ui/tooltip';

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

  const { mutate } = useMutation({
    mutationFn: addLikeAction,
    onSuccess: () => {
      action(blogId);
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

  useLayoutEffect(() => {
    const userId = getLocalData('tempId');
    setUserId(userId);
  }, []);

  return (
    <div className="flex items-end justify-between">
      <div className="-ml-1 flex items-center gap-2">
        <ToolTipComp name="Like">
          <div className="flex items-center">
            <Button
              size={'icon'}
              className={`text-secondary-foreground hover:bg-accent flex h-[30px] w-[30px] items-center justify-center rounded-full bg-transparent ${like?.includes(userId || '') ? 'text-heading' : ''}`}
              onClick={() => handleLike('like')}
              disabled={id.includes('opt_')}
            >
              <ThumbsUp size={18} cursor="pointer" />
            </Button>
            <p>{like?.length}</p>
          </div>
        </ToolTipComp>

        <ToolTipComp name="Dislike">
          <div className="flex items-center">
            <Button
              size={'icon'}
              className={`text-secondary-foreground hover:bg-accent flex h-[30px] w-[30px] items-center justify-center rounded-full bg-transparent ${
                dislike?.includes(userId || '') ? 'text-heading' : ''
              } `}
              onClick={() => handleLike('dislike')}
              disabled={id.includes('opt_')}
            >
              <ThumbsDown size={18} cursor="pointer" />
            </Button>
            <p>{dislike.length}</p>
          </div>
        </ToolTipComp>

        <div className="flex items-center">
          <Button
            size={'icon'}
            className="text-secondary-foreground hover:bg-accent flex h-[30px] w-[55px] cursor-pointer items-center justify-center rounded-full bg-transparent text-[15px]"
            onClick={onClick}
            disabled={id.includes('opt_')}
          >
            {reply ? 'Cancel' : 'Reply'}
          </Button>
        </div>
      </div>
      {(blogUserId === userId || adminID.includes(userId || '')) && (
        <DeleteComment commentId={id} userId={userId} blogId={blogId} />
      )}
    </div>
  );
};

export default Like;
