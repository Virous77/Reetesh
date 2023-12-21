"use client";

import Link from "next/link";
import { useAppContext } from "@/contexts/useAppContext";
import Navigation from "./navigation";

const Tab = () => {
  const {
    state: { activeSection },
    setState,
  } = useAppContext();
  const tabs = ["About", "Experience", "Projects", "Contact"];

  return (
    <div className="md:block hidden  mt-[80px]">
      <ul className="flex flex-col gap-3">
        {tabs.map((tab) => (
          <Link
            href={`/#${tab.toLowerCase()}`}
            className="text-[16px] leading-[1.1] flex items-center gap-3 cursor-pointer"
            key={tab}
            onClick={() => {
              setState((prev) => ({
                ...prev,
                activeSection: tab.toLowerCase(),
                active: tab.toLowerCase(),
              }));

              setTimeout(() => {
                setState((prev) => ({
                  ...prev,
                  active: undefined,
                }));
              }, 1000);
            }}
          >
            {activeSection === tab.toLowerCase() ? (
              <span className="block h-[2px] bg-foreground w-16"></span>
            ) : (
              <span className="block h-[1px] opacity-50 bg-foreground w-10"></span>
            )}
            <span
              className={`${
                activeSection === tab.toLowerCase()
                  ? "opacity-100"
                  : "opacity-70"
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
