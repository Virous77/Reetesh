import CommentCopy from '@/lib/comment-copy';
import { useEffect } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Code = ({ children }: { children: string }) => {
  useEffect(() => {
    const findParentSpan = () => {
      if (typeof window === 'undefined') return;
      const codeElement = document.getElementById('code');
      if (codeElement) {
        const parentSpan = codeElement.closest('span');
        if (parentSpan) {
          parentSpan.classList.add('code-block');
        }
      }
    };
    findParentSpan();
  }, [children]);

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={'jsx'}
        style={materialDark}
        key={children}
        id="code"
      >
        {children}
      </SyntaxHighlighter>
      <CommentCopy code={children} />
    </div>
  );
};

export default Code;
