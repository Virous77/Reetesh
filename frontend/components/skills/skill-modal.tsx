'use client';

import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@/lib/media-query';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

const SkillModal = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const [open, setOpen] = useState(false);
  const newName = name.split('-').join(' ');
  const router = useRouter();
  const desktop = '(min-width: 768px)';
  const isDesktop = useMediaQuery(desktop);

  const handleOpenChange = () => {
    setOpen(!open);
    if (isDesktop) {
      router.back();
    } else {
      if (open) {
        router.back();
      }
    }
  };

  return (
    <Dialog open={true} onOpenChange={handleOpenChange} defaultOpen={true}>
      <DialogContent className="bg-background w-[95%] rounded-md px-3 pb-3 md:max-w-[700px] md:px-4 md:pb-4">
        <DialogHeader>
          <DialogTitle className="font-mono uppercase">{newName}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default SkillModal;
