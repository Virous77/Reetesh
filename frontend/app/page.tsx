import dynamic from 'next/dynamic';

const Author = dynamic(() => import('@/components/author/author'));
const About = dynamic(() => import('@/components/about/about'));
const Footer = dynamic(() => import('@/components/common/footer'));
const Recent = dynamic(() => import('@/components/recent/recent'));

const Home = () => {
  return (
    <main className="relative m-auto h-screen grid-cols-2 items-start gap-5 px-4 sm:max-w-full md:grid md:max-w-[1050px] md:overflow-hidden">
      <Author />
      <section className="body flex flex-col  md:h-full md:gap-[60px] md:pb-8 md:pt-[70px]">
        <About />
        <Recent />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
