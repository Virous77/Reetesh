import { CircleAlert } from 'lucide-react';

type TCallout = {
  emoji: string;
  children: React.ReactNode;
  isRegular?: boolean;
};

const Callout: React.FC<TCallout> = (props) => {
  return (
    <div
      className="callout relative m-auto w-[95%] rounded p-1"
      style={{
        background: `${props.isRegular ? 'rgb(219 234 254)' : 'rgb(220 252 231)'}`,
      }}
    >
      <span
        className=" absolute z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-background text-[20px]"
        style={{ left: '-20px', top: '-10px' }}
      >
        {props.emoji || <CircleAlert size={20} />}
      </span>
      <div
        className=" w-full"
        style={{ paddingLeft: '12px', paddingTop: '2px' }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Callout;
