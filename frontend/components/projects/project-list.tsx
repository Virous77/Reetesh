"use server";

import { TProject } from "@/types/type";
import { CalendarDays, Code, Link2, MoveRight } from "lucide-react";
import parse from "html-react-parser";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

type TProjects = {
  projects: TProject[];
  isActive: boolean;
};

const ProjectList: React.FC<TProjects> = ({ projects, isActive }) => {
  return (
    <div className="flex flex-col gap-2">
      {projects?.map((project) => (
        <Card key={project._id} className="m-1 h-fit border shadow-lg">
          <CardContent className="p-3">
            <>
              <h3 className=" text-[18px] text-heading mb-1">
                {project.title}
              </h3>
              {project?.develop && (
                <span className="flex items-center gap-2 text-default mb-1 text-[13px] uppercase font-bold">
                  <CalendarDays size={17} />
                  {project.develop}
                </span>
              )}
              <span className="text-[14px] leading-5 whitespace-pre-wrap block mt-4 mb-3 text-default">
                {parse(project.desc)}
              </span>

              <Image
                src={project.images}
                alt={project.title}
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className=" rounded"
              />

              <div className=" mt-2 flex flex-wrap gap-2 ">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className=" px-2 py-1 bg-muted text-[12px] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className=" flex items-center gap-5 mt-4 justify-center">
                <a
                  href={project.projectLink}
                  className="text-[13px] flex items-center gap-2 text-default hover:text-defaultMax font-bold underline underline-offset-4"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Link2 size={19} /> Project visit
                </a>

                <a
                  href={project.codeLink}
                  className="text-[13px] flex items-center gap-2 text-default hover:text-defaultMax font-bold underline underline-offset-4"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <Code size={19} /> Code visit
                </a>
              </div>
            </>
          </CardContent>
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
