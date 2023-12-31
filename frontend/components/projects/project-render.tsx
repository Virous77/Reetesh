"use client";

import { useAppContext } from "@/contexts/useAppContext";
import Header from "../common/header";
import React from "react";

type TProjects = {
  projectComp: React.ReactNode;
};

const ProjectRender: React.FC<TProjects> = ({ projectComp }) => {
  const { projectScroll } = useAppContext();

  return (
    <Header name="Project" scroll={projectScroll}>
      {projectComp}
    </Header>
  );
};

export default ProjectRender;
