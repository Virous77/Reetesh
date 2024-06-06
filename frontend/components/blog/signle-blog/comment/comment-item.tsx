import CommentForm from './comment-form';
import { TBlog } from '@/models/blog-comments';
import { formateDate, getLocalData } from '@/utils/utils';
import Like from './like';
import CommentMarkdown from './comment-markdown';
import AuthorImage from '@/components/common/author-image';
import { useMutation } from '@tanstack/react-query';
import action, { createReplyComment } from './action';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Info } from 'lucide-react';

type TReplyComment = {
  id: string;
  comment: string;
  parentId?: string;
};

const adminID = [
  '47256c97-2118-40da-9494-20ffa5dfb044',
  '286d1fb9-7d5b-473f-8e7d-d612bb5736cd',
];

const CommentsItem = ({ comment }: { comment: TBlog }) => {
  const [reply, setReply] = useState(false);
  const pathName = usePathname();

  const { mutate: replyMutate, isPending: isReplyPending } = useMutation({
    mutationFn: createReplyComment,
    onError: (data: any) => {
      alert(data.message || 'Failed to send comment');
    },
    onSuccess: () => {
      setReply(false);
      action(pathName.split('/')[2]);
    },
  });

  const handleSubmit = async (comment: TReplyComment) => {
    if (!comment.comment || comment.comment.trim() === '')
      return alert('Comment is required');
    const id: string = getLocalData('tempId');
    if (!id) {
      const tempId = getLocalData('tempId');
      localStorage.setItem('tempId', JSON.stringify(tempId));
    }

    replyMutate({
      commentId: comment.id,
      blogId: pathName.split('/')[2],
      userId: id,
      comment: comment.comment,
      parentId: comment.parentId,
    });
  };

  return (
    <div
      className={` mt-2 ${comment.children.length > 0 ? 'border-l-2' : 'border-none'} p-2 pl-3 pr-0`}
    >
      {comment.isDeleted ? (
        <div className=" flex items-center gap-2 rounded-md bg-accent p-2 text-[15px] text-default">
          <Info size={18} />
          <p>Comment has been deleted</p>
        </div>
      ) : (
        <div
          key={comment._id.toString()}
          className="grid-cols-custom mb-4 grid items-start gap-3"
        >
          {!adminID.includes(comment.userId.toLowerCase()) ? (
            <div className="flex h-[40px]  w-[40px] items-center justify-center rounded-full bg-gray-200">
              <span className="text-[18px] font-bold text-heading">
                {comment.userId.slice(0, 2)}
              </span>
            </div>
          ) : (
            <AuthorImage />
          )}
          <div className=" overflow-scroll">
            <div className="just-way box-fit prose-headings:font-cal prose prose-base prose-neutral  dark:prose-invert prose-a:whitespace-nowrap prose-a:text-default prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-defaultMax prose-blockquote:font-light prose-img:rounded-lg">
              <CommentMarkdown comment={comment.comment} />
            </div>

            <div className=" mt-2 flex  flex-col">
              <Like
                id={comment._id.toString()}
                like={comment.like}
                dislike={comment.dislike}
                blogId={comment.blogId}
                blogUserId={comment.userId}
                onClick={() => setReply(!reply)}
                reply={reply}
              />
              <p className=" text-[12px] text-default">
                {formateDate(comment.createdAt)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className=" mb-2 mt-2">
        {reply && (
          <CommentForm
            handleAddComment={(e) => {
              handleSubmit({
                id: comment._id,
                comment: e.comment,
                parentId: comment._id,
              });
            }}
            isPending={isReplyPending}
          />
        )}
      </div>
      <div>
        {comment.children.map((child: any, index: number) => (
          <CommentsItem key={index} comment={child} />
        ))}
      </div>
    </div>
  );
};

export default CommentsItem;
