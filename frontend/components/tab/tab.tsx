import Link from 'next/link';
import Navigation from './navigation';

const Tab = () => {
  const tabs = ['Projects'];

  return (
    <div className=" mt-[50px] md:mt-[80px]">
      <ul className="flex flex-col gap-3">
        {tabs.map((tab) => (
          <li key={tab}>
            <Link
              href={`/${tab.toLowerCase()}`}
              className="flex w-fit cursor-pointer items-center gap-3 text-[16px] leading-[1.1]"
            >
              <span className="block h-[1px] w-10 bg-foreground opacity-50"></span>
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
