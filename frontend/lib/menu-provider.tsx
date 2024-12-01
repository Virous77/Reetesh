'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const MenuComp = dynamic(() => import('@/components/common/menu'), {
  ssr: false,
});

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      {children}
      <MenuComp />
    </React.Fragment>
  );
};

export default MenuProvider;
