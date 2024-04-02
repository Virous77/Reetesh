import React, { ReactNode } from 'react';

const SubHeadings = ({ children }: { children: ReactNode }) => {
  return (
    <p className=" mt-6 leading-7">
      <strong className="text-lg font-bold">{children}</strong>
    </p>
  );
};

export default SubHeadings;
