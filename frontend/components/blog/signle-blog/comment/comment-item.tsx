import { TBlog } from '@/models/blog-comments';
import {
  addUserIDToLocalStorage,
  adminID,
  formateDate,
  getLocalData,
  parseType,
} from '@/utils/utils';
import AuthorImage from '@/components/common/author-image';
import { useMutation } from '@tanstack/react-query';
import action, { createReplyComment } from './action';
import { startTransition, useOptimistic, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Info } from 'lucide-react';
import dynamic from 'next/dynamic';
import turndonw from 'turndown';
import CommentTabs from './comment-tabs';

const Like = dynamic(() => import('./like'));
const CommentMarkdown = dynamic(() => import('./comment-markdown'));

type TReplyComment = {
  id: string;
  comment: string;
  parentId?: string;
};

export const commonFields = {
  children: [],
  like: [],
  dislike: [],
  isDeleted: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const CommentsItem = ({ comment }: { comment: TBlog }) => {
  const [reply, setReply] = useState(false);
  const pathName = usePathname();
  const turndownService = new turndonw();

  const [optimisticComment, addNewComment] = useOptimistic(
    comment,
    (state, newTodo: TBlog) => {
      const newState = { ...state };
      newState.children = [newTodo, ...state.children];
      return newState;
    }
  );

  const { mutate: replyMutate } = useMutation({
    mutationFn: createReplyComment,
    onError: (data) => {
      alert(data.message || 'Failed to send comment');
    },
    onSuccess: () => {
      action(pathName.split('/')[2]);
    },
  });

  const handleSubmit = async (comment: TReplyComment) => {
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
        parent: comment.id,
        ...commonFields,
      })
    );
    setReply(false);

    replyMutate({
      blogId: pathName.split('/')[2],
      userId: id,
      comment: comment.comment,
      parentId: comment.parentId,
    });
  };
  const commentContent = parseType(optimisticComment.createdAt)
    ? turndownService.turndown(optimisticComment.comment)
    : optimisticComment.comment;

  return (
    <div
      className={`mt-2 ${comment.children.length > 0 ? 'border-l-2' : 'border-none'} p-2 pr-0 pl-3`}
    >
      {optimisticComment.isDeleted ? (
        <div className="bg-accent text-default flex items-center gap-2 rounded-md p-2 text-[0.938rem]">
          <Info size={18} />
          <p>Comment has been deleted</p>
        </div>
      ) : (
        <div
          key={optimisticComment._id.toString()}
          className="grid-cols-custom mb-4 grid items-start gap-3"
        >
          {!adminID.includes(optimisticComment.userId.toLowerCase()) ? (
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-200">
              <span className="text-heading text-[1.125rem] font-bold">
                {optimisticComment.userId.slice(0, 2)}
              </span>
            </div>
          ) : (
            <AuthorImage />
          )}
          <div className="overflow-scroll">
            <div className="just-way box-fit prose-headings:font-cal prose prose-base prose-neutral dark:prose-invert prose-a:text-default prose-a:underline prose-a:underline-offset-4 prose-a:hover:text-defaultMax prose-blockquote:font-light prose-img:rounded-lg">
              <CommentMarkdown
                comment={commentContent}
                isCode={commentContent.includes('```')}
              />
            </div>

            <div className="mt-2 flex flex-col">
              {optimisticComment && (
                <Like
                  id={optimisticComment._id.toString()}
                  like={optimisticComment.like}
                  dislike={optimisticComment.dislike}
                  blogId={optimisticComment.blogId}
                  blogUserId={optimisticComment.userId}
                  onClick={() => setReply(!reply)}
                  reply={reply}
                />
              )}
              <p className="text-default text-xs">
                {formateDate(optimisticComment.createdAt)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-2 mb-2">
        {reply && (
          <CommentTabs
            handleAddComment={(e) => {
              handleSubmit({
                id: optimisticComment._id,
                comment: e.comment,
                parentId: optimisticComment._id,
              });
            }}
          />
        )}
      </div>
      <div>
        {optimisticComment.children.map((child) => (
          <CommentsItem key={child._id} comment={child} />
        ))}
      </div>
    </div>
  );
};

export default CommentsItem;
