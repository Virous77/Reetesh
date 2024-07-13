'use client';

import React, { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GoogleAdUnit = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      const adsbygoogle = (window as any).adsbygoogle || [];
      if (adsbygoogle && !adsbygoogle.loaded) {
        adsbygoogle.push({});
      }
    } catch (err) {
      console.error(err);
    }
  }, [pathname]);
  return <div className={className}>{children}</div>;
};

export default GoogleAdUnit;
