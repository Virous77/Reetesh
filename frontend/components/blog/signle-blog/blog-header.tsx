'use client';
import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

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
      className={`fixed bottom-0 z-10 mb-4 w-fit -translate-x-1/2 -translate-y-1/2 transform rounded-full border p-2 shadow-2xl backdrop-blur dark:bg-[#111111]/60 ${isHidden ? 'pt-4' : 'pt-2'}`}
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
          className="absolute top-[5px] h-2 w-[60px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-gradient-to-r from-[#515050] to-[#828282] duration-500"
          style={{
            left: '50%',
          }}
        ></button>
      )}
    </motion.section>
  );
};
