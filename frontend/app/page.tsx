export const revalidate = 3600;

import About from '@/components/about/about';
import Author from '@/components/author/author';
import Footer from '@/components/common/footer';
import GithubStreak from '@/components/common/github-streak';
import Recent from '@/components/recent/recent';
import GrainOverlay from '@/components/ui/grain-overlay';
import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <main className="fade-in-out relative z-10 m-auto grid-cols-2 items-start gap-5 px-4 sm:max-w-full md:grid md:max-w-[1050px] md:overflow-hidden">
        <Author />
        <section className="body flex flex-col gap-[30px] md:h-full md:pt-[70px] md:pb-8">
          <About />
          <GithubStreak />
          <Recent />
          <Footer />
        </section>
      </main>
      <GrainOverlay/>
    </React.Fragment>
  );
};

export default Home;
