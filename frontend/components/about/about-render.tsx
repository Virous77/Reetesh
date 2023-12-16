"use client";

import React from "react";
import { useAppContext } from "@/contexts/useAppContext";
import Header from "../common/header";

type TAboutRender = {
  aboutComp: React.ReactNode;
};

const AboutRender: React.FC<TAboutRender> = ({ aboutComp }) => {
  const { aboutScroll } = useAppContext();

  return (
    <Header scroll={aboutScroll} name="About">
      {aboutComp}
    </Header>
  );
};

export default AboutRender;
