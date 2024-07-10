import { CircleAlert } from 'lucide-react';

type TCallout = {
  emoji: string;
  children: React.ReactNode;
  isRegular?: boolean;
  paddingB?: string;
};

const Callout: React.FC<TCallout> = (props) => {
  return (
    <div
      className="callout relative m-auto mt-5 w-[95%] rounded p-1"
      style={{
        background: `${props.isRegular ? 'rgb(219 234 254)' : 'rgb(220 252 231)'}`,
      }}
    >
      <span
        className="absolute flex h-[40px] w-[40px] items-center justify-center rounded-full bg-background text-[20px]"
        style={{ left: '-20px', top: '-10px' }}
      >
        {props.emoji || <CircleAlert size={20} />}
      </span>
      <div
        className="w-full"
        style={{ padding: '10px', paddingBottom: props.paddingB || '0px' }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Callout;
