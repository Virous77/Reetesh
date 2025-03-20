import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReactNode, useState } from 'react';

const ImageZoom = ({
  children,
  image,
  name,
}: {
  children: ReactNode;
  image: string;
  name: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogHeader>
        <DialogTitle>{name}</DialogTitle>
      </DialogHeader>
      <DialogContent
        className="bg-background flex h-full max-w-full items-center justify-center p-0"
        isCloseShown={false}
        onClick={() => setOpen(false)}
        style={{ cursor: 'zoom-out' }}
      >
        <img
          height={0}
          width={0}
          sizes="100vw"
          src={image}
          alt={name}
          className="c-height w-full"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageZoom;
