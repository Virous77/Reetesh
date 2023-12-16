"use client";

import { useAppContext } from "@/contexts/useAppContext";
import Header from "../common/header";
import React from "react";

type TProjects = {
  projectComp: React.ReactNode;
};

const ProjectClient: React.FC<TProjects> = ({ projectComp }) => {
  const { projectScroll } = useAppContext();
  return (
    <Header scroll={projectScroll} name="Project">
      {projectComp}
    </Header>
  );
};

export default ProjectClient;
