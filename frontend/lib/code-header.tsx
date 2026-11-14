'use client';

import { ReactNode, useState } from 'react';
import { Check, Copy } from 'lucide-react';

type TCodeHeader = {
  label: string;
  icon?: ReactNode;
  getText: () => string | undefined;
};

// The bar on top of every code block, in posts and in comments.
const CodeHeader = ({ label, icon, getText }: TCodeHeader) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = getText();
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-header">
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
      <button
        type="button"
        className="code-copy"
        onClick={copy}
        aria-label="Copy code"
      >
        {copied ? (
          <Check size={13} aria-hidden="true" />
        ) : (
          <Copy size={13} aria-hidden="true" />
        )}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeHeader;
