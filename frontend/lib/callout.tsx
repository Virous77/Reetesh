import { CircleAlert } from 'lucide-react';

type TCallout = {
  emoji: string;
  children: React.ReactNode;
};

const Callout: React.FC<TCallout> = ({ emoji, children }) => {
  return (
    <aside className="post-note">
      <span className="post-note-icon" aria-hidden="true">
        {emoji || <CircleAlert size={20} />}
      </span>
      <div className="min-w-0">{children}</div>
    </aside>
  );
};

export default Callout;
