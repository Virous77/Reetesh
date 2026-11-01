'use client';

import { Fragment, useEffect, useRef } from 'react';

const GLYPHS = 'abcdefghijklmnopqrstuvwxyz';
const DURATION_MS = 650;
const SWAP_MS = 45;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

// The scramble writes to the DOM directly, because one React render per frame
// would be wasted work on a component that otherwise never changes.
export const useScramble = <T extends HTMLElement>() => {
  const rootRef = useRef<T>(null);
  const frame = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    []
  );

  const scramble = () => {
    const root = rootRef.current;
    if (!root || frame.current !== null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chars = [...root.querySelectorAll<HTMLElement>('[data-char]')];

    // Glyphs differ in width, so hold each slot still or the sentence re-wraps.
    chars.forEach((char) => {
      char.style.width = `${char.getBoundingClientRect().width}px`;
    });

    const start = performance.now();
    let lastSwap = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const settled = Math.floor((elapsed / DURATION_MS) * chars.length);

      if (elapsed >= DURATION_MS) {
        chars.forEach((char) => {
          char.textContent = char.dataset.char ?? '';
          char.style.width = '';
        });
        frame.current = null;
        return;
      }

      if (now - lastSwap >= SWAP_MS) {
        lastSwap = now;
        chars.forEach((char, index) => {
          char.textContent =
            index < settled ? (char.dataset.char ?? '') : randomGlyph();
        });
      }

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
  };

  return { rootRef, scramble };
};

export const ScrambleText = ({ text }: { text: string }) =>
  text.split(' ').map((word, wordIndex) => (
    <Fragment key={wordIndex}>
      {wordIndex > 0 && ' '}
      <span className="home-word" aria-hidden="true">
        {[...word].map((char, charIndex) => (
          <span key={charIndex} className="home-char" data-char={char}>
            {char}
          </span>
        ))}
      </span>
    </Fragment>
  ));
