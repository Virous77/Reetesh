'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Particles from '@/components/ui/particles';

const ParticlesProvider = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000');
  }, [theme]);

  return (
    <Particles
      className="absolute inset-0"
      quantity={50}
      ease={50}
      color={color}
    />
  );
};

export default ParticlesProvider;
