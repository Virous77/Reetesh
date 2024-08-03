'use client';

import { useRouter } from 'next/navigation';
import {
  Credenza,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
} from '../ui/responsive-modal';
import { useMediaQuery } from '@/lib/media-query';
import { useState } from 'react';

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
    <Credenza open={true} onOpenChange={handleOpenChange} defaultOpen={true}>
      <CredenzaContent className="rounded-md bg-background px-3 pb-3 md:max-w-[700px] md:px-4 md:pb-4">
        <CredenzaHeader>
          <CredenzaTitle className="font-mono uppercase">
            {newName}
          </CredenzaTitle>
        </CredenzaHeader>
        {children}
      </CredenzaContent>
    </Credenza>
  );
};

export default SkillModal;
