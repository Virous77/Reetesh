'use client';

import { TBlog } from '@/models/blog-comments';
import CommentsItem, { commonFields } from './comment-item';
import { usePathname } from 'next/navigation';
import action, { createComment } from './action';
import { useMutation } from '@tanstack/react-query';
import { addUserIDToLocalStorage, getLocalData } from '@/utils/utils';
import React, { useOptimistic, startTransition } from 'react';
import CommentTabs from './comment-tabs';

export type TNewComment = {
  comment: string;
  children: TNewComment[];
  id?: string;
};

const CommentList = ({ data }: { data: TBlog[] }) => {
  const pathName = usePathname();
  const [optimisticComment, addNewComment] = useOptimistic(
    data,
    (state, newTodo: TBlog) => {
      return [newTodo, ...state];
    }
  );

  const { mutate } = useMutation({
    mutationFn: createComment,
    onError: (data) => {
      alert(data.message || 'Failed to send comment');
    },
    onSuccess: () => {
      action(pathName.split('/')[2]);
    },
  });

  const handleAddComment = (comment: TNewComment) => {
    if (!comment.comment || comment.comment.trim() === '')
      return alert('Comment is required');

    const id: string = getLocalData('tempId');
    const tempId = addUserIDToLocalStorage(id);

    startTransition(() =>
      addNewComment({
        comment: comment.comment,
        _id: `opt_${Math.random().toString()}`,
        userId: id || tempId,
        blogId: pathName.split('/')[2],
        parent: null,
        ...commonFields,
      })
    );
    mutate({
      comment: comment.comment,
      userId: id,
      blogId: pathName.split('/')[2],
      parentId: undefined,
    });
  };

  return (
    <React.Fragment>
      <CommentTabs
        handleAddComment={handleAddComment}
        isComment={data.length > 0}
      />
      {optimisticComment.length > 0 ? (
        <div className="no-scrollbar mt-3 max-h-[800px] overflow-y-scroll">
          {optimisticComment.map((comment, index) => (
            <CommentsItem key={index} comment={comment} />
          ))}
        </div>
      ) : (
        <p className="pt-4 pb-2 text-center">No comments yet</p>
      )}
    </React.Fragment>
  );
};

export default CommentList;
