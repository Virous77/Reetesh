'use client';

import { useLayoutEffect } from 'react';
import './globals.css';
import ContactLinks from '@/components/home/contact-links';
import PageShell from '@/components/home/page-shell';
import {
  PhraseButton,
  PhraseLink,
  ScrambleOnLoad,
} from '@/components/home/phrase';

// This page replaces the root layout, so next-themes never runs here.
const applyTheme = () => {
  let theme = 'dark';
  try {
    theme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch {
    // Storage can be blocked; the site defaults to dark.
  }
  document.documentElement.classList.add(theme);
};

const GlobalError = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useLayoutEffect(applyTheme, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Something went wrong | Reetesh Kumar</title>
      </head>
      <body className="antialiased">
        <PageShell>
          <div className="mx-auto flex min-h-dvh max-w-[46rem] flex-col px-6 pt-14 pb-7 md:pt-[8vh]">
            <main className="my-auto">
              <h1 className="not-found-code home-rise">
                <ScrambleOnLoad text="Oops" />
              </h1>
              <p
                className="home-rise home-sentence mt-6"
                style={{ '--i': 1 } as React.CSSProperties}
              >
                Something broke on my side, and it isn&apos;t your fault. You
                could <PhraseButton text="try again" onClick={reset} /> or{' '}
                <PhraseLink text="go home" href="/" external={false} />.
              </p>
            </main>

            <footer className="home-soft pt-8 text-sm">
              <ContactLinks />
            </footer>
          </div>
        </PageShell>
      </body>
    </html>
  );
};

export default GlobalError;
