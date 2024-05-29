import { socials } from '@/utils/utils';
import { ToolTipComp } from '../ui/tooltip';

type TSocial = {
  styles: string;
};

const Social: React.FC<TSocial> = ({ styles }) => {
  return (
    <div className={`flex items-center gap-4 ${styles}`}>
      {socials.map((social, idx) => (
        <ToolTipComp name={social.title} key={idx}>
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer noopener"
            key={idx}
            className="text-default transition-colors duration-200 hover:text-defaultMax"
            referrerPolicy="no-referrer"
            aria-label={social.title}
          >
            {
              <social.name
                className={`${social.title === 'Linkedin' ? 'h-[25px] w-[25px]' : 'h-[23px] w-[23px]'}`}
              />
            }
          </a>
        </ToolTipComp>
      ))}
    </div>
  );
};

export default Social;
