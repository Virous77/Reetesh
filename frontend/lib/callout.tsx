type TCallout = {
  emoji: string;
  children: React.ReactNode;
};

const Callout: React.FC<TCallout> = (props) => {
  return (
    <div className="callout flex items-center gap-5 rounded bg-accent p-3">
      <span>{props.emoji}</span>
      <div className="w-full ">{props.children}</div>
    </div>
  );
};

export default Callout;
