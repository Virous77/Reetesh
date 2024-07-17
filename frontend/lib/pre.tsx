'use client';
import { useRef, useState } from 'react';
import { Icon } from './icons';
import CopyComp from './copy';

export const Pre = ({ children, ...props }: any) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      await navigator.clipboard.writeText(preRef.current.innerText);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 10000);
    }
  };

  return (
    <div className="pre relative rounded border">
      <div
        className="absolute z-10 flex items-center justify-end rounded-lg border bg-background px-3"
        style={{
          top: '-24px',
          right: '-1px',
        }}
      >
        <span className="mr-2 flex items-center gap-2 font-mono text-xs uppercase text-primary">
          <Icon name={props['data-language']?.toLowerCase()} />
          {props['data-language']}
        </span>
        <CopyComp
          onClick={onClick}
          isActive={copied}
          className="w-fit bg-transparent pl-3 text-secondary-foreground hover:bg-transparent"
        />
      </div>
      <pre {...props} ref={preRef}>
        {children}
      </pre>
    </div>
  );
};
