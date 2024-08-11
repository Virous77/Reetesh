import React from 'react';
import styles from './style.module.css';
import { cn } from '@/lib/utils';

const GradientBorderButton = ({ width = '200px' }: { width?: string }) => {
  return (
    <div
      className="relative my-4 flex items-center justify-center rounded-lg border shadow-lg"
      style={{
        width: '100%',
        height: '200px',
      }}
    >
      <div>
        <button
          style={{
            width,
          }}
          className={`${styles.btn} relative flex cursor-pointer items-center justify-center overflow-hidden border-none p-[2px]`}
        >
          <span
            className={cn(
              styles.btnSpan,
              'relative z-[1] w-full bg-background text-base text-[#fff] backdrop-blur-[40px]'
            )}
          >
            Button
          </span>
        </button>
      </div>

      <a
        className="absolute bottom-0 right-0 z-10 text-xs"
        href="https://github.com/Virous77/Reetesh/tree/main/frontend/blog-components/gradient-button/index.tsx"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="React Button"
      >
        React Button
      </a>
    </div>
  );
};

export default GradientBorderButton;
