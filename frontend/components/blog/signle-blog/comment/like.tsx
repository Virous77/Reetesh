'use client';

import { trpc } from '@/trpc-client/client';
import { generateUUID, getLocalData } from '@/utils/utils';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useLayoutEffect } from 'react';
import action from './action';

type TLike = {
  like: string[];
  dislike: string[];
  id: string;
  blogId: string;
};

const Like: React.FC<TLike> = ({ id, like, dislike, blogId }) => {
  const { mutateAsync } = trpc.blogs.addLike.useMutation();
  const [userId, setUserId] = React.useState<string | null>(null);

  const handleLike = async (type: 'like' | 'dislike') => {
    try {
      let tempId = '';
      if (!userId) {
        tempId = generateUUID();
        localStorage.setItem('tempId', JSON.stringify(tempId.toString()));
      }
      await mutateAsync({
        commentId: id,
        userId: userId ? userId : tempId,
        type,
      });
      action(blogId);
    } catch (error) {
      alert('An error occurred, please try again');
    }
  };

  useLayoutEffect(() => {
    const userId = getLocalData('tempId');
    setUserId(userId);
  }, []);

  return (
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
  );
};

export default Like;
