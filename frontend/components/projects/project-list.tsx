import { ArrowUpRight, CalendarDays, Code2, MoveRight } from 'lucide-react';
import parse from 'html-react-parser';
import React from 'react';
import { TProject } from '@/models/projects';
import { Link } from 'next-view-transitions';
import { slugify } from 'markdown-to-jsx';

type TProjects = {
  projects: TProject[];
  isActive: boolean;
};

const ProjectList: React.FC<TProjects> = ({ projects, isActive }) => {
  return (
    <div className="w-full">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects?.map((project, i) => {
          const slug = slugify(project.title);
          const tags = project.tags ?? [];
          return (
            <li
              key={project._id}
              id={slug}
              style={{ animationDelay: `${Math.min(i * 60, 360)}ms` }}
              className="animate-in fade-in slide-in-from-bottom-4 scroll-mt-24 duration-500 fill-mode-both"
            >
              <article className="group border-border/70 bg-card/60 hover:border-heading/40 flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]">
                {/* Cover */}
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  referrerPolicy="no-referrer"
                  aria-label={`Open ${project.title}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <img
                    src={project.images}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute inset-0 bg-linear-to-t from-black/55 via-black/0 to-black/0 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                  <span className="text-defaultMax absolute top-3 right-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-black/45 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  {project?.develop && (
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[11px] tracking-wide text-white/90 backdrop-blur-md">
                      <CalendarDays className="h-3 w-3" />
                      {project.develop}
                    </span>
                  )}
                </a>

                {/* Body */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="project-heading mb-2 w-fit">
                    <Link
                      href={`#${slug}`}
                      className="text-heading group-hover:text-heading flex items-center gap-2 font-mono text-[1.05rem] font-semibold tracking-tight"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <div className="text-default line-clamp-3 text-[0.875rem] leading-6 [&_a]:underline">
                    {parse(project.desc)}
                  </div>

                  {tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="border-border/70 text-default bg-background/40 rounded-md border px-2 py-0.5 font-mono text-[10.5px] tracking-wide capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                      {tags.length > 4 && (
                        <span className="text-default/70 px-1 py-0.5 font-mono text-[10.5px]">
                          +{tags.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer actions */}
                  <div className="border-border/50 mt-4 flex items-center gap-3 border-t pt-3">
                    <a
                      href={project.projectLink}
                      className="text-defaultMax hover:text-heading group/live inline-flex items-center gap-1.5 text-[0.8rem] font-semibold"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer noopener"
                    >
                      Live
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                    </a>
                    <span className="bg-border h-3.5 w-px" aria-hidden />
                    <a
                      href={project.codeLink}
                      className="text-default hover:text-defaultMax inline-flex items-center gap-1.5 text-[0.8rem] font-medium"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer noopener"
                    >
                      <Code2 className="h-3.5 w-3.5" /> Code
                    </a>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {isActive && (
        <Link
          href="/projects"
          className="text-heading mt-5 inline-flex w-fit cursor-pointer items-center gap-2 text-[0.875rem] font-medium"
          aria-label="Visit all Projects"
        >
          Visit all Projects <MoveRight size={18} />
        </Link>
      )}
    </div>
  );
};

export default ProjectList;
