'use client';

import { useRef, useCallback, useEffect, memo } from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

// Matches the page colour, so the browser bars blend in.
const BAR_COLOR = { dark: '#111110', light: '#faf8f5' };

const ThemeSwitcher = memo(function ModeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? BAR_COLOR.dark : BAR_COLOR.light);
  }, [isDark]);

  const onToggle = useCallback(async () => {
    if (!buttonRef.current) return;

    const newTheme = isDark ? 'light' : 'dark';

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

  // Both icons render and CSS picks one, so the button needs no mounted state.
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onToggle}
      className="site-nav-tool relative px-0"
      aria-label="Toggle theme"
      title="Switch theme"
    >
      <Sun className="absolute h-[15px] w-[15px] scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
      <Moon className="absolute h-[15px] w-[15px] scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
    </button>
  );
});

export default ThemeSwitcher;
