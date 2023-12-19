import { LegacyRef, ReactNode } from "react";

type THeader = {
  scroll?: LegacyRef<HTMLDivElement> | undefined;
  children: ReactNode;
  name: string;
};

const Header: React.FC<THeader> = ({ scroll, children, name }) => {
  return (
    <div
      className="flex flex-col gap-4 md:scroll-my-20 mt-[80px] md:mt-0"
      ref={scroll}
    >
      <header className=" block md:hidden sticky top-0 py-3 w-screen -mx-6 left-0 dark:bg-black/60 bg-white/60 backdrop-blur px-4 z-[100]">
        <h2 className=" text-[20px]">{name}</h2>
      </header>

      <div>{children}</div>
    </div>
  );
};

export default Header;
