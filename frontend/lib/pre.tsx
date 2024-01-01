"use client";
import { useRef, useState } from "react";
import { Copy, CopyCheck } from "lucide-react";
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
    <div className="pre">
      <div
        className="flex items-center justify-between w-full bg-muted py-1 px-3 rounded pb-3"
        style={{ marginBottom: "-2rem" }}
      >
        <span className="text-primary text-[14px] capitalize font-mono">
          {props["data-language"]}
        </span>

        <button
          type="button"
          aria-label="Copy to Clipboard"
          onClick={onClick}
          disabled={copied}
        >
          {copied ? <CopyCheck size={20} /> : <Copy size={20} />}
        </button>
      </div>
      <pre {...props} ref={preRef}>
        {children}
      </pre>
    </div>
  );
};
