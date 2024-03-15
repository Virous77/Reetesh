import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const Code = ({ children }: any) => {
  return (
    <SyntaxHighlighter language={'jsx'} style={materialDark} key={children}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
