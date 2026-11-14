import { ReactNode } from 'react';
import { fontVariables } from './fonts';

// The page surface alone, with no data imports, so client pages can use it too.
const ShellFrame = ({ children }: { children: ReactNode }) => (
  <div className={`home ${fontVariables}`}>{children}</div>
);

export default ShellFrame;
