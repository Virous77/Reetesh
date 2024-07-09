'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import errorImg from '@/public/error.svg';

const GlobalError = ({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <html>
      <body>
        <main className="flex h-screen items-center justify-center">
          <section className="flex w-[95%] flex-col items-center gap-1 rounded p-4 shadow md:w-[500px]">
            <h2>Opps! An error occurred!</h2>
            <Image
              width={250}
              height={200}
              src={errorImg}
              alt="error picture"
              aria-label="error image"
            />
            <Button
              className="mt-2"
              aria-label="Reset error"
              onClick={() => reset()}
            >
              Try again
            </Button>
          </section>
        </main>
      </body>
    </html>
  );
};

export default GlobalError;
