import { useEffect } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Code = ({ children }: { children: string }) => {
  useEffect(() => {
    const findParentSpan = () => {
      const codeElement = document.getElementById('code');
      if (codeElement) {
        const parentSpan = codeElement.closest('span');
        if (parentSpan) {
          parentSpan.classList.add('code-block');
        }
      }
    };
    findParentSpan();
  }, []);

  return (
    <SyntaxHighlighter
      language={'jsx'}
      style={materialDark}
      key={children}
      id="code"
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
