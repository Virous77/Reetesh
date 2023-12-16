"use client";

import Link from "next/link";
import useHash from "@/hooks/use-hash";
import { useAppContext } from "@/contexts/useAppContext";
import Navigation from "./navigation";

const Tab = () => {
  const hash = useHash();
  const { executeScroll } = useAppContext();
  const tabs = ["About", "Experience", "Projects", "Contact"];

  return (
    <div className="md:block hidden  mt-[80px]">
      <ul className="flex flex-col gap-3">
        {tabs.map((tab) => (
          <Link
            href={`/#${tab.toLowerCase()}`}
            className="text-[16px] leading-[1.1] flex items-center gap-3 cursor-pointer"
            key={tab}
            onClick={() => executeScroll(tab.toLowerCase())}
          >
            {hash === tab.toLowerCase() ? (
              <span className="block h-[2px] bg-foreground w-16"></span>
            ) : (
              <span className="block h-[1px] opacity-50 bg-foreground w-10"></span>
            )}
            <span
              className={`${
                hash === tab.toLowerCase() ? "opacity-100" : "opacity-50"
              }`}
            >
              {tab}
            </span>
          </Link>
        ))}
      </ul>

      <Navigation />
    </div>
  );
};

export default Tab;
