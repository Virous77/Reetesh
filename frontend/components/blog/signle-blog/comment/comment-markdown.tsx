import Markdown from 'markdown-to-jsx';
import Code from './code';
import { A } from '@/lib/a';

const CommentMarkdown = ({ comment }: { comment: string }) => {
  return (
    <Markdown
      options={{
        overrides: {
          a: A,
          // Fenced blocks get a language class or span lines; inline code gets neither.
          code: {
            component: ({ children, className }) => {
              const language = /lang-(\w+)/.exec(className ?? '')?.[1];
              const text = String(children).replace(/^(\s*\n)+|\s+$/g, '');
              if (language || text.includes('\n')) {
                return <Code language={language}>{text}</Code>;
              }
              return <code>{children}</code>;
            },
          },
          p: {
            component: ({ children }) => <p>{children}</p>,
          },
          pre: {
            component: ({ children }) => <>{children}</>,
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
