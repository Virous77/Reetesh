import dynamic from "next/dynamic";

const Author = dynamic(() => import("@/components/author/author"));
const AboutRender = dynamic(() => import("@/components/about/about-render"));
const About = dynamic(() => import("@/components/about/about"));
const ContactRender = dynamic(
  () => import("@/components/contact/contact-render")
);
const Contact = dynamic(() => import("@/components/contact/contact"));
const ExperienceRender = dynamic(
  () => import("@/components/experience/experience-render")
);
const Experience = dynamic(() => import("@/components/experience/experience"));
const Footer = dynamic(() => import("@/components/contact/footer"));
const ProjectRender = dynamic(
  () => import("@/components/projects/project-render")
);
import { TProject, TQueryData } from "@/types/type";
import { getServerData } from "@/api/server-api";
const ProjectList = dynamic(() => import("@/components/projects/project-list"));

type TResponse = TQueryData & {
  data: TProject[];
};

const Home = async () => {
  const projects: TResponse = await getServerData({
    endpoint: "/projects",
    tag: "projects",
  });

  return (
    <main className="md:grid items-start grid-cols-2 gap-5 md:max-w-[1050px] px-4 sm:max-w-full m-auto h-screen md:overflow-hidden relative">
      <Author />
      <section className="body md:h-full md:overflow-scroll md:pt-[70px]  md:pb-8 flex flex-col md:gap-[100px]">
        <AboutRender aboutComp={<About />} />
        <ExperienceRender experienceComp={<Experience />} />
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
