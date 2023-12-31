import { socials } from "@/utils/utils";

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
          key={idx}
          className="text-default hover:text-defaultMax transition-colors duration-200"
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
