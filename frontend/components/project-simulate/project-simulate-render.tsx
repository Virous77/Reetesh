"use client";

import { ReactNode } from "react";
import Header from "../common/header";
import { useAppContext } from "@/contexts/useAppContext";

type TExperienceRender = {
  experienceComp: ReactNode;
};

const ProjectSimulateRender: React.FC<TExperienceRender> = ({
  experienceComp,
}) => {
  const { projectScroll } = useAppContext();
  return (
    <div className=" hidden md:block">
      <Header name="Projects" scroll={projectScroll}>
        {experienceComp}
      </Header>
    </div>
  );
};

export default ProjectSimulateRender;
