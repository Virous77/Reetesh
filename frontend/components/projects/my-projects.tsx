import { TProject } from "@/models/projects";
import ProjectList from "./project-list";
import Link from "next/link";
import { Home } from "lucide-react";

type TMyProjects = {
  projects: TProject[];
};

const MyProjects: React.FC<TMyProjects> = ({ projects }) => {
  return (
    <section className=" h-fit md:h-full lg:overflow-y-scroll body">
      <div className=" flex items-center flex-col mt-10">
        <div className="fixed md:static bg-background md:bg-transparent z-10 top-0 left-0 w-full p-1 flex items-center justify-between md:text-center md:block">
          <h2 className="text-[18px] md:text-[25px] tracking-widest text-center p-2 md:p-0">
            My Projects
          </h2>
          <Link href="/" className="block md:hidden pr-12 -mb-1">
            <Home size={21} />
          </Link>
        </div>
        <p className=" w-[95%] md:w-[60%] text-center mt-2 text-[15px] text-default mb-10">
          Welcome to my Projects Page, a curated showcase of the diverse array
          of applications I&apos;ve crafted on my coding journey. Each project
          reflects not only technical proficiency but also a passion for
          creating meaningful solutions.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 pb-3">
        <ProjectList projects={projects} isActive={false} />
      </div>
    </section>
  );
};

export default MyProjects;
