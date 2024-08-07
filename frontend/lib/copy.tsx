import { Button } from '@/components/ui/button';
import { ToolTipComp } from '@/components/ui/tooltip';
import { Copy, CopyCheck } from 'lucide-react';
import { cn } from './utils';

type TCopy = {
  onClick: () => void;
  isActive: boolean;
  className: string;
};

const CopyComp: React.FC<TCopy> = ({ onClick, isActive, className }) => {
  return (
    <ToolTipComp name="Copy">
      <Button
        size="icon"
        className={cn(className)}
        style={{
          cursor: 'copy',
        }}
        aria-label="Copy to Clipboard"
        onClick={onClick}
        disabled={isActive}
      >
        {isActive ? <CopyCheck size={19} /> : <Copy size={19} />}
      </Button>
    </ToolTipComp>
  );
};

export default CopyComp;
