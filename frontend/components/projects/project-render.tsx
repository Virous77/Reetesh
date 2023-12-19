"use client";

import Header from "../common/header";
import React from "react";

type TProjects = {
  projectComp: React.ReactNode;
};

const ProjectRender: React.FC<TProjects> = ({ projectComp }) => {
  return <Header name="Project">{projectComp}</Header>;
};

export default ProjectRender;
