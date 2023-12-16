"use client";

import { ReactNode } from "react";
import Header from "../common/header";
import { useAppContext } from "@/contexts/useAppContext";

type TExperienceRender = {
  experienceComp: ReactNode;
};

const ExperienceRender: React.FC<TExperienceRender> = ({ experienceComp }) => {
  const { experienceScroll } = useAppContext();
  return (
    <Header name="Experience" scroll={experienceScroll}>
      {experienceComp}
    </Header>
  );
};

export default ExperienceRender;
