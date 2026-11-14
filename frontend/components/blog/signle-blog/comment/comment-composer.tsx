'use client';

import { FormEvent, useState } from 'react';
import { marked } from 'marked';
import CommentMarkdown from './comment-markdown';

export type TComment = {
  comment: string;
  children: any[];
};

type TCommentComposer = {
  onSubmit: (comment: TComment) => void;
  onCancel?: () => void;
  isReply?: boolean;
};

const CommentComposer = ({ onSubmit, onCancel, isReply }: TCommentComposer) => {
  const [mode, setMode] = useState<'write' | 'preview'>('write');
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return alert('Comment is required');

    // Comments are stored as HTML, as they always have been.
    onSubmit({ comment: marked.parse(text) as string, children: [] });
    setText('');
    setMode('write');
  };

  return (
    <form onSubmit={handleSubmit} className="comment-composer">
      <div className="comment-composer-tabs" role="tablist">
        {(['write', 'preview'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={mode === tab}
            className="comment-composer-tab"
            onClick={() => setMode(tab)}
          >
            {tab === 'write' ? 'Write' : 'Preview'}
          </button>
        ))}
      </div>

      {mode === 'write' ? (
        <textarea
          name="comment"
          aria-label={isReply ? 'Write a reply' : 'Write a comment'}
          placeholder={
            isReply ? 'Write a reply...' : 'Share a thought or question...'
          }
          className="comment-composer-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus={isReply}
          required
        />
      ) : (
        <div className="comment-body comment-composer-preview">
          {text.trim() ? (
            <CommentMarkdown comment={text} />
          ) : (
            <p className="home-faint">Nothing to preview yet.</p>
          )}
        </div>
      )}

      <div className="comment-composer-foot">
        <span className="home-faint font-mono text-xs">
          Posted anonymously with your local browser ID
        </span>
        <div className="flex items-center gap-2">
          {onCancel && (
            <button type="button" className="btn-ghost" onClick={onCancel}>
              Cancel
            </button>
          )}
          <button type="submit" className="btn-accent">
            {isReply ? 'Post reply' : 'Post comment'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentComposer;
