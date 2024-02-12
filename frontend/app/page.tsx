import dynamic from "next/dynamic";

const Author = dynamic(() => import("@/components/author/author"));
const About = dynamic(() => import("@/components/about/about"));
const Footer = dynamic(() => import("@/components/common/footer"));
const Recent = dynamic(() => import("@/components/recent/recent"));

const Home = () => {
  return (
    <main className="md:grid items-start grid-cols-2 gap-5 md:max-w-[1050px] px-4 sm:max-w-full m-auto h-screen md:overflow-hidden relative">
      <Author />
      <section className="body md:h-full md:pt-[70px]  md:pb-8 flex flex-col md:gap-[60px]">
        <About />
        <Recent />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
