import { TProject } from '@/models/projects';
import ProjectList from './project-list';
import { Home } from 'lucide-react';
import { Root } from '@/routes';

type TMyProjects = {
  projects: TProject[];
};

const MyProjects: React.FC<TMyProjects> = ({ projects }) => {
  return (
    <section className="body h-fit md:h-full lg:overflow-y-scroll">
      <div className="mt-10 flex flex-col items-center">
        <header className="bg-background fixed top-0 left-0 z-10 flex w-full items-center justify-between p-1 md:static md:block md:bg-transparent md:text-center">
          <h1 className="p-2 text-center text-[1.125rem] font-semibold tracking-widest md:p-0 md:text-[1.563rem]">
            My Projects
          </h1>
          <Root.Link
            className="-mb-1 block pr-12 md:hidden"
            aria-label="Visit Home Page"
          >
            <Home size={21} />
          </Root.Link>
        </header>

        <p className="text-default mt-2 mb-10 w-[95%] text-center text-[15px] md:w-[60%]">
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
