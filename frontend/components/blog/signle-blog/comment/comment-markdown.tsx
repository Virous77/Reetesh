import React from 'react';
import Markdown from 'markdown-to-jsx';
import Code from './code';
import { A } from '@/lib/a';

const CommentMarkdown = ({
  comment,
  isCode,
}: {
  comment: string;
  isCode: boolean;
}) => {
  return (
    <Markdown
      options={{
        overrides: {
          a: A,
          code: {
            component: ({ children }) => {
              if (isCode) {
                return <Code>{children}</Code>;
              } else {
                return <code>{children}</code>;
              }
            },
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
