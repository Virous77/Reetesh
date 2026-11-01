'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { ScrambleText, useScramble } from './scramble-text';

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

// The URL hash holds the open section, so sections can be linked to directly.
export const useHashSection = <T extends string>(
  sections: readonly T[],
  fallback: T
): T => {
  const hash = useSyncExternalStore(
    subscribe,
    () => window.location.hash.slice(1),
    () => ''
  );

  return sections.find((section) => section === hash) ?? fallback;
};

export const Phrase = ({
  section,
  active,
  text,
}: {
  section: string;
  active: boolean;
  text: string;
}) => {
  const { rootRef, scramble } = useScramble<HTMLAnchorElement>();

  return (
    <a
      ref={rootRef}
      href={`#${section}`}
      className="home-phrase"
      aria-label={text}
      aria-current={active ? 'true' : undefined}
      data-active={active}
      onPointerEnter={scramble}
      onFocus={scramble}
    >
      <ScrambleText text={text} />
    </a>
  );
};

export const PhraseButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  const { rootRef, scramble } = useScramble<HTMLButtonElement>();

  return (
    <button
      ref={rootRef}
      type="button"
      className="home-phrase"
      aria-label={text}
      onClick={onClick}
      onPointerEnter={scramble}
      onFocus={scramble}
    >
      <ScrambleText text={text} />
    </button>
  );
};

export const PhraseLink = ({
  text,
  href,
  external = true,
}: {
  text: string;
  href: string;
  external?: boolean;
}) => {
  const { rootRef, scramble } = useScramble<HTMLAnchorElement>();

  return (
    <a
      ref={rootRef}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="home-phrase"
      aria-label={text}
      onPointerEnter={scramble}
      onFocus={scramble}
    >
      <ScrambleText text={text} />
    </a>
  );
};

export const ScrambleOnLoad = ({ text }: { text: string }) => {
  const { rootRef, scramble } = useScramble<HTMLSpanElement>();

  useEffect(() => {
    scramble();
  }, []);

  return (
    <span ref={rootRef} aria-label={text}>
      <ScrambleText text={text} />
    </span>
  );
};
