import React from 'react';
import CommentMarkdown from './comment-markdown';

type TPreview = {
  comment: string;
  isComment: boolean;
};

const Preview: React.FC<TPreview> = ({ comment, isComment }) => {
  return (
    <div
      className={`just-way prose-headings:font-cal prose prose-base prose-neutral ${isComment ? 'mb-[18px]' : 'mb-[6px]'} min-h-[98px] rounded-lg border p-2 dark:prose-invert prose-a:text-default prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-defaultMax prose-blockquote:font-light prose-img:rounded-lg`}
    >
      {comment ? (
        <CommentMarkdown comment={comment} isCode={comment.includes('```')} />
      ) : (
        <p className="text-foreground-secondary px-1 pt-[13px]">
          Nothing to preview
        </p>
      )}
    </div>
  );
};

export default Preview;
