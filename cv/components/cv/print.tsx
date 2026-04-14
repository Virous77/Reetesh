"use client";
import { useEffect } from "react";
import { Button } from "../ui/button";

const Print = () => {
  const handleClickPrint = () => {
    const credit = document.getElementById("credit");
    if (credit) {
      credit.style.display = "none";
      window.print();
      credit.style.display = "flex";
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        const credit = document.getElementById("credit");
        if (credit) {
          credit.style.display = "none";
          window.print();
          credit.style.display = "flex";
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <footer
      className=" flex items-center justify-center w-full mt-4 gap-4"
      id="credit"
    >
      <div className="  items-center gap-3 md:flex hidden">
        <p className=" font-serif">Print</p>
        <kbd className="pointer-events-none  hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] text-sm font-medium text-muted-foreground opacity-100  md:inline-flex">
          <span className="text-xs">⌘</span>
          <span className=" text-[10px]">K</span>
        </kbd>
      </div>

      <Button
        variant="ghost"
        className=" font-serif block  md:hidden"
        onClick={handleClickPrint}
      >
        Download
      </Button>
    </footer>
  );
};

export default Print;
