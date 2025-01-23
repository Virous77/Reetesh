'use client';

import React, { ReactNode, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';
import { cn } from '@/lib/utils';

const useCommonHook = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const yRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const diff = y - yRef.current;

    if (Math.abs(diff) > 50) {
      setIsHidden(diff > 0);
      yRef.current = y;
    }
  });

  return { isHidden, setIsHidden };
};

const BlogHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const { isHidden, setIsHidden } = useCommonHook();
  return (
    <motion.header
      onFocusCapture={() => setIsHidden(false)}
      className={className}
      transition={{ duration: 0.3 }}
      animate={isHidden ? 'hidden' : 'visible'}
      variants={{
        hidden: {
          y: '-100%',
        },
        visible: {
          y: '0%',
        },
      }}
    >
      {children}
    </motion.header>
  );
};

export default BlogHeader;

export const BlogShareMotion = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isHidden, setIsHidden } = useCommonHook();
  return (
    <motion.section
      className={`fixed bottom-0 z-10 mb-4 w-fit rounded-full border p-2 shadow-2xl backdrop-blur-sm dark:bg-[#111111]/60 ${isHidden ? 'pt-4' : 'pt-2'}`}
      style={{
        left: '50%',
      }}
      onFocusCapture={() => setIsHidden(false)}
      initial="visible"
      whileTap="visible"
      transition={{ duration: 0.3 }}
      animate={isHidden ? 'hidden' : 'visible'}
      variants={{
        hidden: {
          y: '100%',
          x: '-50%',
        },
        visible: {
          y: '0%',
          x: '-50%',
        },
      }}
    >
      {children}
      {isHidden && (
        <button
          title="show share"
          aria-label="show share"
          aria-hidden="true"
          onClick={() => setIsHidden(false)}
          className="absolute top-[5px] h-2 w-[60px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-linear-to-r from-[#515050] to-[#828282] duration-500"
          style={{
            left: '50%',
          }}
        ></button>
      )}
    </motion.section>
  );
};

export const BlogPageReadTracker = ({ className }: { className: string }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });
  return <motion.div className={className} style={{ scaleX }} />;
};

export const PageTransitionMotion = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.main>
  );
};

export const AdvertiseParent = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }}
      className="mt-2 flex w-full items-center rounded border-2 p-2"
      style={{ justifyContent: 'end' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const TableContentList = ({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) => {
  const duration = 0.5 + index * 0.1;
  return (
    <motion.li
      key={index}
      initial={{ x: -130, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration }}
    >
      {children}
    </motion.li>
  );
};

export const GithubCard = ({
  children,
  styleTypeInitial,
  styleTypeAnimate,
  className,
}: {
  children: ReactNode;
  styleTypeInitial: {};
  styleTypeAnimate: {};
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...styleTypeInitial }}
      whileInView={{ opacity: 1, ...styleTypeAnimate }}
      transition={{ duration: 3, type: 'spring', bounce: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const LiveDot = () => {
  const circleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="absolute top-[6px] left-[6px] flex items-center justify-center space-x-2">
      {[...Array(1)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-heading h-3 w-3 rounded-full"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.9,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
      ))}
      <div className="bg-heading absolute left-[-0.7px] h-3 w-3 rounded-full opacity-50" />
    </div>
  );
};

export const LiveDotComp = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <LiveDot />
      {children}
    </div>
  );
};
