import { CalendarDays, Code, Link2, MoveRight } from 'lucide-react';
import parse from 'html-react-parser';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { TProject } from '@/models/projects';
import { Projects } from '@/routes';
import { Link } from 'next-view-transitions';
import { slugify } from 'markdown-to-jsx';
import { Separator } from '../ui/separator';

type TProjects = {
  projects: TProject[];
  isActive: boolean;
};

const ProjectList: React.FC<TProjects> = ({ projects, isActive }) => {
  return (
    <ul className="flex flex-col gap-2">
      {projects?.map((project) => (
        <li key={project._id}>
          <Card className="to-[#1f1f1f]shadow-lg m-1 h-fit border from-[#111111] dark:border-none dark:bg-linear-to-r dark:shadow-none">
            <CardContent className="p-3">
              <>
                <h3
                  className="project-heading text-heading mb-1 w-fit font-mono text-base md:text-[1.125rem]"
                  id={slugify(project.title)}
                >
                  <Link
                    href={`#${slugify(project.title)}`}
                    className="flex items-center gap-2 font-semibold"
                  >
                    {project.title}
                    <span className="text-secondary-foreground hidden">#</span>
                  </Link>
                </h3>
                {project?.develop && (
                  <span className="text-default mb-1 flex items-center gap-2 text-[0.813rem] font-semibold uppercase">
                    <CalendarDays size={17} />
                    {project.develop}
                  </span>
                )}
                <span className="text-default mt-4 mb-3 block text-[0.875rem] leading-5 whitespace-pre-wrap">
                  {parse(project.desc)}
                </span>

                <Image
                  src={project.images}
                  alt={project.title}
                  height={100}
                  width={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded"
                />

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted rounded-md px-2 py-1 text-xs capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-center gap-5">
                  <a
                    href={project.projectLink}
                    className="text-default hover:text-defaultMax flex items-center gap-2 text-[0.813rem] font-bold underline underline-offset-4"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noreferrer noopener"
                  >
                    <Link2 size={19} /> Project visit
                  </a>

                  <a
                    href={project.codeLink}
                    className="text-default hover:text-defaultMax flex items-center gap-2 text-[0.813rem] font-bold underline underline-offset-4"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noreferrer noopener"
                  >
                    <Code size={19} /> Code visit
                  </a>
                </div>
              </>
            </CardContent>
          </Card>
          <Separator className="mt-2" />
        </li>
      ))}
      {isActive && (
        <Projects.Link
          className="text-primary flex cursor-pointer items-center gap-2 text-[0.875rem]"
          aria-label="Visit all Projects"
        >
          Visit all Projects <MoveRight size={19} />
        </Projects.Link>
      )}
    </ul>
  );
};

export default ProjectList;
