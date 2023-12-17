"use client";

import { ReactNode } from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect } from "react";
hljs.registerLanguage("javascript", javascript);

type THtmlContent = {
  children: ReactNode;
};

const HtmlContent: React.FC<THtmlContent> = ({ children }) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);
  return <>{children}</>;
};

export default HtmlContent;
