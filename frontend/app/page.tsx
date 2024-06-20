import About from '@/components/about/about';
import Author from '@/components/author/author';
import Footer from '@/components/common/footer';
import GithubStreak from '@/components/common/github-streak';
import Recent from '@/components/recent/recent';

export const revalidate = 36000;

const Home = () => {
  return (
    <main className="relative m-auto grid-cols-2 items-start gap-5 px-4 sm:max-w-full md:grid md:max-w-[1050px] md:overflow-hidden">
      <Author />
      <section className="body flex flex-col gap-[30px] md:h-full md:pb-8 md:pt-[70px]">
        <About />
        <GithubStreak />
        <Recent />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
