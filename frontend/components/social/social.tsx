import { socials } from "@/utils/utils";

const Social = () => {
  return (
    <div className=" mt-8 md:absolute left-0 bottom-12 z-10 flex items-center gap-4">
      {socials.map((social, idx) => (
        <a
          href={social.url}
          target="_blank"
          key={idx}
          className=" text-foreground hover:text-accent transition-colors duration-200"
          referrerPolicy="no-referrer"
        >
          {<social.name size={25} />}
        </a>
      ))}
    </div>
  );
};

export default Social;
