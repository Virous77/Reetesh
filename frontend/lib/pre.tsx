"use client";
import { useRef, useState } from "react";
import { Copy, CopyCheck } from "lucide-react";
import { Icon, icons } from "./icons";

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
    <div className="pre border rounded">
      <div
        className="flex items-center justify-between w-full py-1 px-3  pb-3"
        style={{
          marginTop: "5px",
          borderBottom: "1px solid hsl(var(--border))",
        }}
      >
        <span className="text-primary text-[14px] capitalize font-mono flex items-center gap-2">
          <Icon name={props["data-language"]?.toLowerCase()} />
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
