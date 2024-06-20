import React from 'react';
import Markdown from 'markdown-to-jsx';
import Code from './code';

const CommentMarkdown = ({ comment }: { comment: string }) => {
  return (
    <Markdown
      options={{
        overrides: {
          code: {
            component: Code,
          },
          p: {
            component: ({ children }) => <p>{children}</p>,
          },
          pre: {
            component: ({ children }) => <pre className="p-0">{children}</pre>,
          },
          h1: {
            component: ({ children }) => <h1 className="m-0">{children}</h1>,
          },
          h2: {
            component: ({ children }) => <h2 className="m-0">{children}</h2>,
          },
          h3: {
            component: ({ children }) => <h3 className="m-0">{children}</h3>,
          },
          h4: {
            component: ({ children }) => <h4 className="m-0">{children}</h4>,
          },
        },
      }}
    >
      {comment}
    </Markdown>
  );
};

export default CommentMarkdown;
