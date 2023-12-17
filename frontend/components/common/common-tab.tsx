import Link from "next/link";
import Social from "../social/social";
import { ReactNode } from "react";

type TLink = {
  name: string;
  path: string;
  icon: ReactNode | null;
};

type TCommonTab = {
  links: TLink[];
  type?: boolean;
};

const CommonTab: React.FC<TCommonTab> = ({ links, type = true }) => {
  const style = type
    ? "mt-8 md:absolute left-0 bottom-12 z-10"
    : "mt-8 md:absolute left-0 -bottom-10 z-10";
  return (
    <aside
      className={`px-[40px] md:px-0 ${
        type ? "md:h-[50vh]" : "md:mt-6 pb-4"
      } flex items-center relative`}
    >
      <ul className=" flex flex-col gap-3">
        {links.map((link, idx) => (
          <Link href={link.path} key={idx} className=" flex items-center gap-2">
            {link.icon ? (
              <span>{link.icon}</span>
            ) : (
              <span className="block h-[1px] opacity-50 bg-foreground w-10"></span>
            )}
            <span
              className={`${
                link.icon ? "opacity-100" : "opacity-50"
              } hover:opacity-100`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </ul>

      <Social styles={style} />
    </aside>
  );
};

export default CommonTab;
