import { Link } from 'next-view-transitions';
import Social from '../social/social';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LiveDotComp } from './motion';

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
    ? 'mt-8 md:absolute left-0 bottom-12 z-10'
    : 'mt-8 md:absolute left-0 -bottom-10 z-10';
  return (
    <aside
      className={`px-[40px] md:px-0 ${
        type ? 'items-center md:h-[50vh]' : 'pb-4 md:mt-6'
      } relative flex flex-col md:flex-row`}
    >
      <ul className="flex flex-col gap-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.path}
              className="flex items-center gap-2"
              aria-label={link.name}
            >
              {link.icon ? (
                <LiveDotComp>{link.icon}</LiveDotComp>
              ) : (
                <span className="bg-foreground block h-[1px] w-10 opacity-50"></span>
              )}
              <span
                className={cn(
                  link.icon ? 'font-semibold opacity-100' : 'opacity-50',
                  'hover:opacity-100'
                )}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Social styles={style} />
    </aside>
  );
};

export default CommonTab;
