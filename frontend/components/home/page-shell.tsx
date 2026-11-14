import { ReactNode } from 'react';
import ShellFrame from './shell-frame';
import SiteFooter from './site-footer';
import SiteHeader from './site-header';

const PageShell = ({ children }: { children: ReactNode }) => (
  <ShellFrame>
    <div className="mx-auto flex min-h-dvh max-w-[46rem] flex-col px-6 pt-8 pb-10 md:px-8 md:pt-12">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  </ShellFrame>
);

export default PageShell;
