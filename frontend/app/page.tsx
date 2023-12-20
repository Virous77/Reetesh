import Author from "@/components/author/author";
import AboutRender from "@/components/about/about-render";
import About from "@/components/about/about";
import ContactRender from "@/components/contact/contact-render";
import Contact from "@/components/contact/contact";
import ExperienceRender from "@/components/experience/experience-render";
import Experience from "@/components/experience/experience";
import Footer from "@/components/contact/footer";
import ProjectRender from "@/components/projects/project-render";
import { TProject, TQueryData } from "@/types/type";
import { getServerData } from "@/api/server-api";
import ProjectList from "@/components/projects/project-list";
import FakeRender from "@/components/fake/fake-render";
import Fake from "@/components/fake/fake";

type TResponse = TQueryData & {
  data: TProject[];
};

const Home = async () => {
  const projects: TResponse = await getServerData({
    endpoint: "/projects",
    tag: "projects",
  });

  const makeTile = (title: string) => title.replace(/\s+/g, "-").toLowerCase();

  console.log(makeTile("State management in React apps"));
  return (
    <main className="md:grid items-start grid-cols-2 gap-5 md:max-w-[1050px] px-4 sm:max-w-full m-auto h-screen md:overflow-hidden relative">
      <Author />
      <section className="body md:h-full md:overflow-scroll md:pt-[70px]  md:pb-8 flex flex-col md:gap-[100px]">
        <AboutRender aboutComp={<About />} />
        <ExperienceRender experienceComp={<Experience />} />
        <FakeRender experienceComp={<Fake />} />
        <ProjectRender
          projectComp={
            <ProjectList projects={projects.data?.slice(0, 5)} isActive />
          }
        />
        <ContactRender contactComp={<Contact />} />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
