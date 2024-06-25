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
    <div className="pre relative rounded border">
      <div
        className="absolute z-10 flex items-center justify-end rounded-lg border bg-background px-3"
        style={{
          top: '-24px',
          right: '-1px',
        }}
      >
        <span className="mr-2 flex items-center gap-2 font-mono text-[13px] uppercase text-primary">
          <Icon name={props['data-language']?.toLowerCase()} />
          {props['data-language']}
        </span>

        <ToolTipComp name="Copy">
          <Button
            size="icon"
            className="w-fit bg-transparent pl-3 text-secondary-foreground hover:bg-transparent"
            aria-label="Copy to Clipboard"
            onClick={onClick}
            disabled={copied}
          >
            {copied ? <CopyCheck size={19} /> : <Copy size={19} />}
          </Button>
        </ToolTipComp>
      </div>
      <pre {...props} ref={preRef}>
        {children}
      </pre>
    </div>
  );
};
