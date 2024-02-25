'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';

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
      className={`fixed right-3 flex  flex-col gap-2 ${
        pathName.includes('/blog') ? 'bottom-5' : 'top-3'
      } z-[101] md:fixed md:right-8 md:top-6`}
    >
      <div
        className="bg-default-100 hover:bg-default-200 flex h-8 w-8 cursor-pointer items-center justify-center"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <Sun size={20} data-testid="sun" />
        ) : (
          <Moon size={20} data-testid="moon" />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
