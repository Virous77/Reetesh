import { TProject } from '@/models/projects';
import ProjectList from './project-list';
import Link from 'next/link';
import { Home } from 'lucide-react';

type TMyProjects = {
  projects: TProject[];
};

const MyProjects: React.FC<TMyProjects> = ({ projects }) => {
  return (
    <section className=" body h-fit md:h-full lg:overflow-y-scroll">
      <div className=" mt-10 flex flex-col items-center">
        <div className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-background p-1 md:static md:block md:bg-transparent md:text-center">
          <h2 className="p-2 text-center text-[18px] tracking-widest md:p-0 md:text-[25px]">
            My Projects
          </h2>
          <Link
            href="/"
            className="-mb-1 block pr-12 md:hidden"
            aria-label="Visit Home Page"
          >
            <Home size={21} />
          </Link>
        </div>
        <p className=" mb-10 mt-2 w-[95%] text-center text-[15px] text-default md:w-[60%]">
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
