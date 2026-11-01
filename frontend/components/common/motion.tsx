'use client';

import { ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const BlogPageReadTracker = ({ className }: { className: string }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });
  return <motion.div className={className} style={{ scaleX }} />;
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
