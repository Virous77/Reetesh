import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

const ButtonGradient = ({ ...props }: ButtonProps) => {
  return (
    <div className="group relative overflow-hidden rounded-full border border-zinc-400 bg-white p-0.5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <Button
        {...props}
        className={cn(
          'h-10 w-full rounded-full bg-transparent px-8 font-semibold text-foreground backdrop-blur-xl hover:bg-background',
          props.className
        )}
      />
    </div>
  );
};

export default ButtonGradient;
