'use client';

import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

const SkillModal = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const newName = name.split('-').join(' ');
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[95%] rounded-md md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="font-mono uppercase">{newName}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default SkillModal;
