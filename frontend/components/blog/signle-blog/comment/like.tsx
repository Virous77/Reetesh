'use client';

import { generateUUID, getLocalData } from '@/utils/utils';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useLayoutEffect } from 'react';
import action from './action';
import DeleteComment from './delete-comment';
import { useMutation } from '@tanstack/react-query';
import { addLikeAction } from './like-action';

type TLike = {
  like: string[];
  dislike: string[];
  id: string;
  blogId: string;
  blogUserId: string;
};

const Like: React.FC<TLike> = ({ id, like, dislike, blogId, blogUserId }) => {
  const [userId, setUserId] = React.useState<string | null>(null);

  const { mutate } = useMutation({
    mutationFn: addLikeAction,
    onSuccess: () => {
      action(blogId);
    },
    onError: (data: any) => {
      alert(data.message || 'Failed to like');
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
          <span
            className={`flex h-[30px] w-[30px] items-center justify-center rounded-full hover:bg-accent ${like?.includes(userId || '') ? 'text-heading' : ''} `}
            onClick={() => handleLike('like')}
          >
            <ThumbsUp size={18} cursor="pointer" />
          </span>
          <p>{like?.length}</p>
        </div>

        <div className=" flex items-center">
          <span
            className={`flex h-[30px] w-[30px] items-center justify-center rounded-full hover:bg-accent ${
              dislike?.includes(userId || '') ? 'text-heading' : ''
            } `}
            onClick={() => handleLike('dislike')}
          >
            <ThumbsDown size={18} cursor="pointer" />
          </span>
          <p>{dislike.length}</p>
        </div>
      </div>
      {blogUserId === userId && (
        <DeleteComment commentId={id} userId={userId} blogId={blogId} />
      )}
    </div>
  );
};

export default Like;
