import Markdown from 'react-markdown';
import Code from './code';

const CommentMarkdown = ({ comment }: { comment: string }) => {
  return (
    <Markdown
      components={{
        code: Code,
        p: ({ children }) => <span>{children}</span>,
        pre: ({ children }) => <pre className=" p-0">{children}</pre>,
        h3: ({ children }) => <h3 className="m-0">{children}</h3>,
        h4: ({ children }) => <h4 className="m-0">{children}</h4>,
        h1: ({ children }) => <h1 className="m-0">{children}</h1>,
        h2: ({ children }) => <h2 className="m-0">{children}</h2>,
      }}
    >
      {comment}
    </Markdown>
  );
};

export default CommentMarkdown;
