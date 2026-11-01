import { ReactNode } from 'react';
import GrainOverlay from '@/components/ui/grain-overlay';
import { fontVariables } from './fonts';

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className={`home ${fontVariables}`}>
    <div className="home-glow" aria-hidden="true">
      <span />
      <span />
    </div>
    {children}
    <GrainOverlay />
  </div>
);

export default PageShell;
