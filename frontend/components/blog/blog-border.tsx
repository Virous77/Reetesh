'use client';
import { ReactNode, useLayoutEffect, useState } from 'react';
import ShineBorder from '../ui/shine-border';
import { useTheme } from 'next-themes';

const BlogBorder = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useLayoutEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000');
  }, [theme]);

  return <ShineBorder color={color}>{children}</ShineBorder>;
};

export default BlogBorder;
