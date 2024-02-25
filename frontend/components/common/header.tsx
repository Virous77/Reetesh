import { ReactNode } from 'react';

type THeader = {
  children: ReactNode;
};

const Header: React.FC<THeader> = ({ children }) => {
  return (
    <div className="mt-[50px] flex flex-col gap-4 md:mt-0 md:scroll-my-20">
      <div>{children}</div>
    </div>
  );
};

export default Header;
