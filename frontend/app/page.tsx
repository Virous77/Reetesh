import About from '@/components/about/about';
import Author from '@/components/author/author';
import Footer from '@/components/common/footer';
import Recent from '@/components/recent/recent';

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
