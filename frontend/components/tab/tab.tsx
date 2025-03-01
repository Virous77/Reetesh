import { Link } from 'next-view-transitions';
import Navigation from './navigation';

const Tab = () => {
  const tabs = ['Projects', 'Resume'];

  return (
    <div className="mt-[50px] md:mt-[80px]">
      <ul className="flex flex-col gap-3">
        {tabs.map((tab) => (
          <li key={tab}>
            <Link
              target={tab === 'Resume' ? '_blank' : '_self'}
              href={
                tab === 'Resume'
                  ? 'https://cv.reetesh.in'
                  : `/${tab.toLowerCase()}`
              }
              referrerPolicy={tab === 'Resume' ? 'no-referrer' : 'origin'}
              rel={tab === 'Resume' ? 'noopener noreferrer' : ''}
              className="flex w-fit cursor-pointer items-center gap-3 text-base leading-[1.1]"
              aria-label={
                tab === 'Resume' ? 'Reetesh Resume' : 'Visit all Projects'
              }
            >
              <span className="bg-foreground block h-[1px] w-10 opacity-50"></span>
              <span className="font-mono">{tab}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Navigation />
    </div>
  );
};

export default Tab;
