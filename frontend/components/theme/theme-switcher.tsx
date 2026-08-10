'use client';

import { useRef, useCallback, memo } from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { usePathname } from 'next/navigation';

const ThemeSwitcher = memo(function ModeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const pathName = usePathname();

  const isDark = resolvedTheme === 'dark';

  const onToggle = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = isDark ? 'light' : 'dark';

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const maxDistance = Math.hypot(
      Math.max(centerX, window.innerWidth - centerX),
      Math.max(centerY, window.innerHeight - centerY)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${centerX}px ${centerY}px)`,
          `circle(${maxDistance}px at ${centerX}px ${centerY}px)`,
        ],
      },
      {
        duration: 700,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  }, [isDark, setTheme]);

  // Use CSS-based icon switching - no mounted state needed
  // Icons are always rendered, CSS shows/hides based on .dark class
  return (
    <div
      className={`fixed right-3 flex flex-col gap-2 ${
        pathName.includes('/blog') || pathName.includes('/learn')
          ? 'bottom-5'
          : 'top-3'
      } z-101`}
    >
      <Tooltip>
        <TooltipTrigger
          asChild
          className="bg-transparent! hover:bg-transparent"
        >
          <Button
            ref={buttonRef}
            onClick={onToggle}
            variant="outline"
            size="icon"
            className="text-secondary-foreground flex h-8 w-8 cursor-pointer items-center justify-center border-none bg-transparent! hover:bg-transparent"
            aria-label="Toggle theme"
          >
            {/* Sun icon - visible in dark mode */}
            <Sun className="absolute h-4 w-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:rotate-90" />
            {/* Moon icon - visible in light mode */}
            <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Switch to {isDark ? 'light' : 'dark'} mode
        </TooltipContent>
      </Tooltip>
    </div>
  );
});

export default ThemeSwitcher;
