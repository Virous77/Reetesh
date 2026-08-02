import { TProject } from '@/models/projects';
import ProjectList from './project-list';
import { Home } from 'lucide-react';
import { Link } from 'next-view-transitions';

type TMyProjects = {
  projects: TProject[];
};

const MyProjects: React.FC<TMyProjects> = ({ projects }) => {
  return (
    <section className="body h-fit md:h-full lg:overflow-y-scroll">
      {/* Hero */}
      <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 md:mt-6">
        <p className="text-heading font-mono text-[11px] tracking-[0.35em] uppercase">
          Selected Work
        </p>
        <h1 className="text-defaultMax mt-3 text-3xl font-semibold tracking-tight md:text-[2.25rem] md:leading-[1.1]">
          Things I&apos;ve Built
        </h1>
        <p className="text-default mt-4 max-w-2xl text-[15px] leading-relaxed">
          A curated showcase of applications I&apos;ve crafted along my coding
          journey. Each one reflects not just the tech, but a genuine care for
          the details and for building something that actually solves a problem.
        </p>

        <div className="text-default mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-wide">
          <span className="text-defaultMax tabular-nums">
            {String(projects.length).padStart(2, '0')}
          </span>
          <span className="text-default/70">projects</span>
          <span className="bg-border h-3 w-px" aria-hidden />
          <span>Full-Stack</span>
          <span className="bg-border h-3 w-px" aria-hidden />
          <span>Web · Web3</span>
        </div>
      </div>

      <div className="mt-8 pb-6 md:mt-10">
        <ProjectList projects={projects} isActive={false} />
      </div>
    </section>
  );
};

export default MyProjects;
