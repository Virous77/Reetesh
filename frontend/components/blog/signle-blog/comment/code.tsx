import CommentCopy from '@/lib/comment-copy';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Code = ({ children }: { children: string }) => {
  return (
    <div className="relative">
      <SyntaxHighlighter language={'jsx'} style={materialDark} key={children}>
        {children}
      </SyntaxHighlighter>
      <CommentCopy code={children} />
    </div>
  );
};

export default Code;
