import React from 'react';
import CopyComp from './copy';

const CommentCopy = ({ code }: { code: string }) => {
  const [copied, setCopied] = React.useState(false);

  const onClick = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <div
      className="rounded-md border"
      style={{
        position: 'absolute',
        top: '3px',
        right: '4px',
      }}
    >
      <CopyComp
        onClick={onClick}
        isActive={copied}
        className="hover:bg-opacity-70"
      />
    </div>
  );
};

export default CommentCopy;
