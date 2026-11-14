'use client';

import { TBlog } from '@/models/blog-comments';
import CommentsItem, { commonFields } from './comment-item';
import { usePathname } from 'next/navigation';
import { createComment } from './action';
import { useMutation } from '@tanstack/react-query';
import { addUserIDToLocalStorage, getLocalData } from '@/utils/utils';
import React, { useOptimistic, startTransition } from 'react';
import CommentComposer from './comment-composer';

type TNewComment = {
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
    onSuccess: (result) => {
      if ('error' in result) alert(result.error);
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
      userId: id || tempId,
      blogId: pathName.split('/')[2],
      parentId: undefined,
    });
  };

  return (
    <React.Fragment>
      <CommentComposer onSubmit={handleAddComment} />
      {optimisticComment.length > 0 ? (
        <div className="mt-6 space-y-4">
          {optimisticComment.map((comment) => (
            <CommentsItem key={comment._id} comment={comment} />
          ))}
        </div>
      ) : (
        <p className="home-faint mt-6 text-center text-sm">
          No comments yet. Be the first to start the discussion.
        </p>
      )}
    </React.Fragment>
  );
};

export default CommentList;
