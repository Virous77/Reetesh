"use client";
import { useEffect } from "react";

const Print = () => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        window.print();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <footer className="mt-10 flex justify-center print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground"
      >
        Save as PDF
        <kbd className="hidden rounded-sm border border-border px-1.5 py-0.5 text-[10px] md:inline">
          ⌘K
        </kbd>
      </button>
    </footer>
  );
};

export default Print;
