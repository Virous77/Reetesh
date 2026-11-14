import { TBlog } from '@/models/blog-comments';
import {
  addUserIDToLocalStorage,
  adminID,
  formateDate,
  getLocalData,
  parseType,
} from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { createReplyComment } from './action';
import { startTransition, useOptimistic, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import turndonw from 'turndown';
import CommentComposer from './comment-composer';

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

// A short, stable tag from the visitor ID, so readers stay anonymous.
const readerTag = (userId: string) =>
  `#${(userId.replace(/[^a-f0-9]/gi, '') || userId).slice(0, 4).toLowerCase()}`;

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
    onSuccess: (result) => {
      if ('error' in result) alert(result.error);
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
      userId: id || tempId,
      comment: comment.comment,
      parentId: comment.parentId,
    });
  };
  const commentContent = parseType(optimisticComment.createdAt)
    ? turndownService.turndown(optimisticComment.comment)
    : optimisticComment.comment;

  const isAuthor = adminID.includes(optimisticComment.userId.toLowerCase());

  return (
    <div>
      {optimisticComment.isDeleted ? (
        <div className="comment-card home-faint text-sm">
          This comment was deleted.
        </div>
      ) : (
        <article className="comment-card">
          <header className="flex items-baseline justify-between gap-4">
            <p className="text-[0.95rem] font-medium">
              {isAuthor ? (
                <>
                  Reetesh <span className="badge ml-1">Author</span>
                </>
              ) : (
                <>Reader · {readerTag(optimisticComment.userId)}</>
              )}
            </p>
            <time
              dateTime={optimisticComment.createdAt}
              className="ledger-meta"
            >
              {formateDate(optimisticComment.createdAt)}
            </time>
          </header>

          <div className="just-way comment-body mt-2">
            <CommentMarkdown comment={commentContent} />
          </div>

          <Like
            id={optimisticComment._id.toString()}
            like={optimisticComment.like}
            dislike={optimisticComment.dislike}
            blogUserId={optimisticComment.userId}
            onClick={() => setReply(!reply)}
            reply={reply}
          />
        </article>
      )}

      {reply && (
        <div className="mt-3">
          <CommentComposer
            isReply
            onCancel={() => setReply(false)}
            onSubmit={(e) => {
              handleSubmit({
                id: optimisticComment._id,
                comment: e.comment,
                parentId: optimisticComment._id,
              });
            }}
          />
        </div>
      )}

      {optimisticComment.children.length > 0 && (
        <div className="comment-replies">
          {optimisticComment.children.map((child) => (
            <CommentsItem key={child._id} comment={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentsItem;
