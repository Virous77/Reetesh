'use client';

import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const MenuComp = () => {
  const pathname = usePathname();

  const isBlog = pathname === '/blogs';
  const isHidden =
    pathname === '/' || pathname === '/privacy' || pathname.includes('/blog/');

  return (
    <Button
      onClick={() => {
        window.scrollTo(0, document.body.scrollHeight);
      }}
      size="icon"
      className={cn(
        'fixed z-50 flex h-6 w-6 rounded-full lg:hidden',
        isBlog
          ? 'bottom-14 right-4 md:bottom-[23px] md:right-12'
          : 'bottom-4 right-4',
        isHidden && 'hidden'
      )}
    >
      <Menu size={20} />
    </Button>
  );
};

export default MenuComp;
