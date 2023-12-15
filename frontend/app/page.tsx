import Author from "@/components/author/author";
import About from "@/components/about/about";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import Project from "@/components/projects/project";
import { ScrollShadow } from "@nextui-org/react";

const Home = () => {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log("scroller2 is in view");
  //           // Call your function or perform any action when scroller2 is in view
  //         }
  //       });
  //     },
  //     { threshold: 0.95 } // Adjust the threshold as needed
  //   );

  //   if (scroller2.current) {
  //     observer.observe(scroller2.current);
  //   }

  //   return () => {
  //     if (scroller2.current) {
  //       observer.unobserve(scroller2.current);
  //     }
  //   };
  // }, []);

  return (
    <main className="md:grid items-start grid-cols-2 gap-5 md:max-w-[1000px] px-4 sm:max-w-full m-auto h-screen md:overflow-hidden relative">
      <ThemeSwitcher />
      <Author />

      <div className="body md:h-full md:overflow-scroll md:pt-[70px]  md:pb-8 flex flex-col md:gap-[100px]">
        <About />
        <Project />
      </div>
    </main>
  );
};

export default Home;
