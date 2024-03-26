import { socials } from '@/utils/utils';

type TSocial = {
  styles: string;
};

const Social: React.FC<TSocial> = ({ styles }) => {
  return (
    <div className={`flex items-center gap-4 ${styles}`}>
      {socials.map((social, idx) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer noopener"
          key={idx}
          className="text-default transition-colors duration-200 hover:text-defaultMax"
          referrerPolicy="no-referrer"
          aria-label={social.title}
        >
          {<social.name size={25} />}
        </a>
      ))}
    </div>
  );
};

export default Social;
