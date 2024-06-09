'use client';
import { useRef, useState } from 'react';
import { Copy, CopyCheck } from 'lucide-react';
import { Icon } from './icons';
import { ToolTipComp } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

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
    <div className="pre rounded border">
      <div
        className="flex w-full items-center justify-between px-3 py-1 pb-3"
        style={{
          marginTop: '5px',
          borderBottom: '1px solid hsl(var(--border))',
        }}
      >
        <span className="flex items-center gap-2 font-mono text-[14px] capitalize text-primary">
          <Icon name={props['data-language']?.toLowerCase()} />
          {props['data-language']}
        </span>

        <ToolTipComp name="Copy">
          <Button
            size="icon"
            className="bg-transparent text-secondary-foreground hover:bg-transparent"
            aria-label="Copy to Clipboard"
            onClick={onClick}
            disabled={copied}
          >
            {copied ? <CopyCheck size={20} /> : <Copy size={20} />}
          </Button>
        </ToolTipComp>
      </div>
      <pre {...props} ref={preRef}>
        {children}
      </pre>
    </div>
  );
};
