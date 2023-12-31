"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`flex flex-col gap-2  fixed right-3 ${
        pathName.includes("/blog") ? "bottom-5" : "top-3"
      } md:fixed md:right-8 md:top-6 z-[101]`}
    >
      <div
        className="w-8 h-8 flex items-center justify-center bg-default-100 hover:bg-default-200 cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
