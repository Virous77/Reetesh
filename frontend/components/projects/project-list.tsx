"use server";

import { TProject } from "@/types/type";
import { Card, CardBody, Image } from "@nextui-org/react";
import { CalendarDays, Code, Link2, MoveRight } from "lucide-react";
import parse from "html-react-parser";
import Link from "next/link";
import React from "react";

type TProjects = {
  projects: TProject[];
  isActive: boolean;
};

const ProjectList: React.FC<TProjects> = ({ projects, isActive }) => {
  return (
    <div className="flex flex-col gap-2 md:mt-[-90px]">
      {projects?.map((project) => (
        <Card key={project._id} className=" m-1  hover:bg-default-100 h-fit">
          <CardBody>
            <div>
              <h3 className=" text-[18px] text-success">{project.title}</h3>
              {project?.develop && (
                <span className="flex items-center gap-2 text-default-400 mb-1 text-tiny uppercase font-bold">
                  <CalendarDays size={17} />
                  {project.develop}
                </span>
              )}
              <span className="text-[14px] leading-5 whitespace-pre-wrap block mt-4">
                {parse(project.desc)}
              </span>
              <Image
                src={project.images}
                alt={project.title}
                className=" mt-2"
                isBlurred
                shadow="lg"
              />

              <div className=" mt-2 flex flex-wrap gap-2 ">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className=" px-2 py-1 bg-default-100 text-[12px] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className=" flex items-center gap-5 mt-4 justify-center">
                <a
                  href={project.projectLink}
                  className=" text-primary text-[13px] flex items-center gap-2"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Link2 size={19} /> Project visit
                </a>

                <a
                  href={project.codeLink}
                  className=" text-primary text-[13px] flex items-center gap-2"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Code size={19} /> Code visit
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
      {isActive && (
        <Link
          className=" cursor-pointer text-[14px] text-primary flex items-center gap-2"
          href="/projects"
        >
          Visit all Projects <MoveRight size={19} />
        </Link>
      )}
    </div>
  );
};

export default ProjectList;
