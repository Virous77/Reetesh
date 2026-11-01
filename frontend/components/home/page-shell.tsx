import { ReactNode } from 'react';
import { Bricolage_Grotesque, Fraunces } from 'next/font/google';
import GrainOverlay from '@/components/ui/grain-overlay';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-fraunces',
});

const PageShell = ({ children }: { children: ReactNode }) => (
  <div className={`home ${bricolage.variable} ${fraunces.variable}`}>
    <div className="home-glow" aria-hidden="true">
      <span />
      <span />
    </div>
    {children}
    <GrainOverlay />
  </div>
);

export default PageShell;
