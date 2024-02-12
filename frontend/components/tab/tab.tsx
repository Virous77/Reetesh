import Link from "next/link";
import Navigation from "./navigation";

const Tab = () => {
  const tabs = ["Projects"];

  return (
    <div className=" mt-[50px] md:mt-[80px]">
      <ul className="flex flex-col gap-3">
        {tabs.map((tab) => (
          <li key={tab}>
            <Link
              href={`/${tab.toLowerCase()}`}
              className="text-[16px] leading-[1.1] flex items-center gap-3 cursor-pointer w-fit"
            >
              <span className="block h-[1px] opacity-50 bg-foreground w-10"></span>
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
