import { ReactNode } from "react";

type THeader = {
  children: ReactNode;
};

const Header: React.FC<THeader> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 md:scroll-my-20 mt-[50px] md:mt-0">
      <div>{children}</div>
    </div>
  );
};

export default Header;
