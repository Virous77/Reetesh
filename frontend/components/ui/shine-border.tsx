import { cn } from '@/lib/utils';
type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

const ShineBorder = ({
  borderRadius = 8,
  borderWidth = 1,
  duration = 50,
  color = '#000000',
  className,
  children,
}: ShineBorderProps) => {
  return (
    <div
      style={
        {
          '--border-radius': `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn('relative rounded-(--border-radius)', className)}
    >
      <div
        style={
          {
            '--border-width': `${borderWidth}px`,
            '--border-radius': `${borderRadius}px`,
            '--shine-pulse-duration': `${duration}s`,
            '--mask-linear-gradient': `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            '--background-radial-gradient': `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(',') : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-(--border-radius) before:p-(--border-width) before:will-change-[background-position] before:content-[""] before:[-webkit-mask-composite:xor]! before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask-composite:exclude]! before:[mask:var(--mask-linear-gradient)] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      />
      {children}
    </div>
  );
};

export default ShineBorder;
