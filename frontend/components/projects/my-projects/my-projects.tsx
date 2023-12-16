import { TProject } from "@/types/type";
import ProjectList from "../project-list";

type TMyProjects = {
  projects: TProject[];
};

const MyProjects: React.FC<TMyProjects> = ({ projects }) => {
  return (
    <section className=" h-full overflow-scroll body">
      <div className=" flex items-center flex-col mt-10 ">
        <h2 className=" text-[25px] tracking-[2px]">My Projects</h2>
        <p className=" w-[60%] text-center mt-2 text-[15px] opacity-70 ">
          Welcome to my Projects Page, a curated showcase of the diverse array
          of applications I&apos;ve crafted on my coding journey. Each project
          reflects not only technical proficiency but also a passion for
          creating meaningful solutions.
        </p>
      </div>
      <div className=" mt-10">
        <ul className=" flex flex-wrap gap-3">
          <ProjectList projects={projects} isActive={false} />
        </ul>
      </div>
    </section>
  );
};

export default MyProjects;
