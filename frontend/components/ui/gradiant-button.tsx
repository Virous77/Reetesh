import { cn } from '@/lib/utils';
import { Button, ButtonProps } from './button';

const ButtonGradient = ({ ...props }: ButtonProps) => {
  return (
    <div className="group relative overflow-hidden rounded-full border border-zinc-400 bg-white p-0.5 shadow dark:border-zinc-800 dark:bg-zinc-900">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)]" />
      <Button
        {...props}
        className={cn(
          'h-10 w-full rounded-full bg-transparent px-8 font-semibold text-foreground backdrop-blur-xl hover:bg-transparent',
          props.className
        )}
      />
    </div>
  );
};

export default ButtonGradient;
