import { CalendarDays, Code, Link2, MoveRight } from 'lucide-react';
import parse from 'html-react-parser';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { TProject } from '@/models/projects';
import { Projects } from '@/routes';
import Link from 'next/link';
import { slugify } from 'markdown-to-jsx';

type TProjects = {
  projects: TProject[];
  isActive: boolean;
};

const ProjectList: React.FC<TProjects> = ({ projects, isActive }) => {
  return (
    <div className="flex flex-col gap-2">
      {projects?.map((project) => (
        <Card
          key={project._id}
          className="to-[#1f1f1f]shadow-lg m-1 h-fit border from-[#111111] dark:border-none dark:bg-gradient-to-r dark:shadow-none"
        >
          <CardContent className="p-3">
            <>
              <h3
                className="project-heading mb-1 w-fit font-mono text-base text-heading md:text-[18px]"
                id={slugify(project.title)}
              >
                <Link
                  href={`#${slugify(project.title)}`}
                  className="flex items-center gap-2"
                >
                  {project.title}
                  <span className="hidden text-secondary-foreground">#</span>
                </Link>
              </h3>
              {project?.develop && (
                <span className="mb-1 flex items-center gap-2 text-[13px] font-bold uppercase text-default">
                  <CalendarDays size={17} />
                  {project.develop}
                </span>
              )}
              <span className="mb-3 mt-4 block whitespace-pre-wrap text-[14px] leading-5 text-default">
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
                    className="rounded-md bg-muted px-2 py-1 text-[12px] capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-5">
                <a
                  href={project.projectLink}
                  className="flex items-center gap-2 text-[13px] font-bold text-default underline underline-offset-4 hover:text-defaultMax"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer noopener"
                >
                  <Link2 size={19} /> Project visit
                </a>

                <a
                  href={project.codeLink}
                  className="flex items-center gap-2 text-[13px] font-bold text-default underline underline-offset-4 hover:text-defaultMax"
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
      ))}
      {isActive && (
        <Projects.Link
          className="flex cursor-pointer items-center gap-2 text-[14px] text-primary"
          aria-label="Visit all Projects"
        >
          Visit all Projects <MoveRight size={19} />
        </Projects.Link>
      )}
    </div>
  );
};

export default ProjectList;
