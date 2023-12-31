"use server";

import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col gap-3">
      <p className="leading-[1.65] tracking-wide text-default">
        My journey in the field of software development commenced in{" "}
        <span className="font-[500]  text-defaultMax">2021</span>, and from the
        very first day, I found an unwavering passion for coding. The allure of
        <span className=" text-defaultMax font-[500]"> Javascript</span>{" "}
        captured my interest, and I embarked on a journey of continuous
        learning, immersing myself in the intricacies of web development.
      </p>

      <p className="  leading-[1.65] tracking-wide text-default">
        In
        <span className=" text-defaultMax font-[500]"> December 2022,</span> an
        opportunity presented itself when an individual reached out to me on
        LinkedIn for a freelance project. I undertook the responsibility of
        crafting the entire user interface for the application, marking a
        significant milestone in my career.
      </p>

      <p className="leading-[1.65] tracking-wide text-default">
        Subsequently, in{" "}
        <span className=" text-defaultMax font-[500]"> February 2023,</span> I
        secured my first full-time position as a{" "}
        <span className=" text-defaultMax font-[500]">
          {" "}
          Full-Stack Developer.
        </span>{" "}
        In this role, I have been actively engaged in utilizing cutting-edge
        technologies such as{" "}
        <span className=" text-defaultMax font-[500]">
          Typescript, Next.js, React, Node.js, Express, MongoDB, Solidity, Rust,
          Docker, and Anchor.
        </span>{" "}
        This diverse tech stack has not only broadened my skill set but has also
        enabled me to contribute effectively to the development and enhancement
        of comprehensive solutions.
      </p>

      <p className=" leading-[1.65] tracking-wide text-default">
        I am committed to continuous growth and innovation, leveraging my skills
        and expertise to make meaningful contributions to the ever-evolving
        landscape of software development.
      </p>
    </div>
  );
};

export default About;
