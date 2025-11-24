'use client';

import { useEffect } from 'react';

const GrainOverlay = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const size = 100;
    canvas.width = size;
    canvas.height = size;

    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 51;
    }

    ctx.putImageData(imageData, 0, 0);
    document.body.style.setProperty('--grain-bg', `url(${canvas.toDataURL()})`);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99999999999,
        backgroundImage: 'var(--grain-bg)',
        opacity: 0.2,
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default GrainOverlay;