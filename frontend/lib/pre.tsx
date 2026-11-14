'use client';
import { useRef } from 'react';
import CodeHeader from './code-header';
import { Icon } from './icons';

type TIconName = Parameters<typeof Icon>[0]['name'];

export const Pre = ({ children, ...props }: any) => {
  const preRef = useRef<HTMLPreElement>(null);
  const language: string | undefined = props['data-language'];

  return (
    <div className="code-window not-prose">
      <CodeHeader
        label={language ?? 'code'}
        icon={language && <Icon name={language.toLowerCase() as TIconName} />}
        getText={() => preRef.current?.innerText}
      />
      <pre {...props} ref={preRef}>
        {children}
      </pre>
    </div>
  );
};
