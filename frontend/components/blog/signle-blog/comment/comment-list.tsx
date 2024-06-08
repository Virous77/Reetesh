'use client';

import { TBlog } from '@/models/blog-comments';
import CommentsItem from './comment-item';
import { usePathname } from 'next/navigation';
import action, { createComment } from './action';
import { useMutation } from '@tanstack/react-query';
import { getLocalData } from '@/utils/utils';
import CommentForm from './comment-form';
import React, { useOptimistic, startTransition } from 'react';

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

  const { mutate, isPending } = useMutation({
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
    if (!id) {
      const tempId = getLocalData('tempId');
      localStorage.setItem('tempId', JSON.stringify(tempId));
    }

    startTransition(() =>
      addNewComment({
        comment: comment.comment,
        children: [],
        _id: `opt_${Math.random().toString()}`,
        userId: id,
        blogId: pathName.split('/')[2],
        parent: true,
        like: [],
        dislike: [],
        isDeleted: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
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
      <CommentForm handleAddComment={handleAddComment} isPending={isPending} />
      {optimisticComment.length > 0 ? (
        <div className="no-scrollbar mt-3 max-h-[800px] overflow-y-scroll">
          {optimisticComment.map((comment, index) => (
            <CommentsItem key={index} comment={comment} />
          ))}
        </div>
      ) : (
        <p className=" pb-2 pt-4 text-center">No comments yet</p>
      )}
    </React.Fragment>
  );
};

export default CommentList;
