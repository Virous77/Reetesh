import { ReactNode } from 'react';

const Summary = ({ children }: { children: any }) => {
  return <ul>{children}</ul>;
};

export default Summary;

export const LI = ({ children }: { children: ReactNode }) => {
  return <li>{children}</li>;
};
