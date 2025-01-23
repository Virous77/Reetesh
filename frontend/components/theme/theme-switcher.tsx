'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

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
      className={`fixed right-3 flex flex-col gap-2 ${
        pathName.includes('/blog') || pathName.includes('/learn')
          ? 'bottom-5'
          : 'top-3'
      } z-101`}
    >
      <Button
        size="icon"
        className="flex h-8 w-8 cursor-pointer items-center justify-center bg-transparent text-secondary-foreground hover:bg-transparent"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        name="theme-switcher"
        title="Toggle theme"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
