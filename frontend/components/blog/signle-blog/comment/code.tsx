import CodeHeader from '@/lib/code-header';
import { PrismLight } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';

const SyntaxHighlighter = PrismLight as any;

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);

const LANGUAGES: Record<string, string> = {
  js: 'jsx',
  jsx: 'jsx',
  javascript: 'jsx',
  ts: 'tsx',
  tsx: 'tsx',
  typescript: 'tsx',
  sh: 'bash',
  bash: 'bash',
  shell: 'bash',
  json: 'json',
};

// Andromeeda, the theme posts use, so code in comments looks the same.
const color = (value: string) => ({ color: value });
const andromeeda: Record<string, React.CSSProperties> = {
  'code[class*="language-"]': { color: '#d5ced9', background: 'none' },
  'pre[class*="language-"]': {
    color: '#d5ced9',
    background: 'transparent',
    margin: 0,
    padding: '1rem 1.15rem',
    overflow: 'auto',
  },
  comment: { color: '#a0a1a7cc', fontStyle: 'italic' },
  prolog: color('#a0a1a7cc'),
  punctuation: color('#d5ced9'),
  keyword: color('#c74ded'),
  operator: color('#ee5d43'),
  string: color('#96e072'),
  'template-string': color('#96e072'),
  char: color('#96e072'),
  number: color('#f39c12'),
  boolean: color('#f39c12'),
  constant: color('#ffe66d'),
  function: color('#ffe66d'),
  'class-name': color('#ffe66d'),
  builtin: color('#ffe66d'),
  'maybe-class-name': color('#ffe66d'),
  property: color('#00e8c6'),
  'property-access': color('#00e8c6'),
  parameter: color('#00e8c6'),
  variable: color('#00e8c6'),
  tag: color('#f92672'),
  'attr-name': color('#ffe66d'),
  'attr-value': color('#96e072'),
};

const Code = ({
  children,
  language,
}: {
  children: string;
  language?: string;
}) => {
  const lang = language?.toLowerCase();

  return (
    <div className="code-window not-prose">
      <CodeHeader label={lang ?? 'code'} getText={() => children} />
      <SyntaxHighlighter
        language={LANGUAGES[lang ?? ''] ?? 'jsx'}
        style={andromeeda}
        key={children}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
