'use client';

import React, {  ReactNode, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    adsbygoogle?: any | any[];
  }
}

const GoogleAdUnit = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [pathname, searchParams]);
  return <div className={className}>{children}</div>;
};

export default GoogleAdUnit;
