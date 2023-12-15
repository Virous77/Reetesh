"use client";

import { useAppContext } from "@/contexts/useAppContext";
import Header from "../common/header";
import { TProject } from "@/types/type";
import { Card, CardBody, Image, Link } from "@nextui-org/react";
import React from "react";
import { CalendarDays, Code, Link2 } from "lucide-react";
import parse from "html-react-parser";

type TProjects = {
  projects: TProject[];
};

const ProjectClient: React.FC<TProjects> = ({ projects }) => {
  const { projectScroll } = useAppContext();
  return (
    <Header scroll={projectScroll} name="Project">
      <React.Fragment>
        {projects?.slice(0, 5).map((project) => (
          <Card
            key={project._id}
            className=" m-1 cursor-pointer hover:bg-default-100"
          >
            <CardBody>
              <div></div>
              <div>
                <h3 className=" text-[18px] text-success">{project.title}</h3>
                {project?.develop && (
                  <span className=" text-[13px] flex items-center gap-2 text-default-400 mb-1">
                    <CalendarDays size={17} color="#ff6933" />
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
        <Link color="primary" className=" cursor-pointer text-[15px]">
          Visit all Projects..
        </Link>
      </React.Fragment>
    </Header>
  );
};

export default ProjectClient;
