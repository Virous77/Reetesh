"use client";

import React from "react";
import { useAppContext } from "@/contexts/useAppContext";
import Header from "../common/header";

const About = () => {
  const { aboutScroll } = useAppContext();

  return (
    <Header scroll={aboutScroll} name="About">
      <p className="  leading-[1.65] tracking-wide text-default-500">
        My journey in the field of software development commenced in{" "}
        <span className=" text-default-900 font-[500]">2020</span>, and from the
        very first day, I found an unwavering passion for coding. The allure of
        <span className=" text-default-900 font-[500]"> Javascript</span>{" "}
        captured my interest, and I embarked on a journey of continuous
        learning, immersing myself in the intricacies of web development.
      </p>

      <p className="  leading-[1.65] tracking-wide text-default-500">
        In
        <span className=" text-default-900 font-[500]"> December 2022,</span> an
        opportunity presented itself when an individual reached out to me on
        LinkedIn for a freelance project. I undertook the responsibility of
        crafting the entire user interface for the application, marking a
        significant milestone in my career.
      </p>

      <p className="leading-[1.65] tracking-wide text-default-500">
        Subsequently, in{" "}
        <span className=" text-default-900 font-[500]"> February 2023,</span> I
        secured my first full-time position as a{" "}
        <span className=" text-default-900 font-[500]">
          {" "}
          Full-Stack Developer.
        </span>{" "}
        . In this role, I have been actively engaged in utilizing cutting-edge
        technologies such as{" "}
        <span className=" text-default-900 font-[500]">
          Typescript, Next.js, React, Node.js, Express, MongoDB, Solidity, Rust,
          Docker, and Tailwind CSS.
        </span>{" "}
        This diverse tech stack has not only broadened my skill set but has also
        enabled me to contribute effectively to the development and enhancement
        of comprehensive solutions.
      </p>

      <p className=" leading-[1.65] tracking-wide text-default-500">
        I am committed to continuous growth and innovation, leveraging my skills
        and expertise to make meaningful contributions to the ever-evolving
        landscape of software development.
      </p>
    </Header>
  );
};

export default About;
