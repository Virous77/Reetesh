"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed right-3 flex  flex-col gap-2 top-3 z-[101]">
      <div
        className="bg-default-100 hover:bg-default-200 flex h-8 w-8 cursor-pointer items-center justify-center"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun size={20} aria-label="light" />
        ) : (
          <Moon size={20} aria-label="dark" />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
