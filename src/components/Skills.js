import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import Loader from "./UI/Loader";
import { urlFor } from "../client";
import { useFunctionContext } from "../store/functionContext";

const Skills = () => {
  const { skills, isLoading } = useFunctionContext();

  return (
    <section className="skills">
      <div className="aboutSkillView">
        <h2>My Skills</h2>

        <div className="skillInfo">
          <motion.p
            whileInView={{ opacity: [0, 1], x: [200, 0] }}
            transition={{ duration: 1.4 }}
            className="skillPara"
          >
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps.
          </motion.p>

          <motion.p
            whileInView={{ opacity: [0, 1], x: [-200, 0] }}
            transition={{ duration: 1.4 }}
          >
            I Build client-side applications with modern features like SPA and
            maintain semantic coding style among other best practices for SEO
            optimisation. Use modern tech such as React (next.js), TailwindCSS.
          </motion.p>
        </div>
      </div>

      {!isLoading ? (
        <motion.div
          className="mySkillList"
          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{ duration: 1.4 }}
        >
          {skills?.map((skill) => (
            <li key={skill?._id}>
              <img src={urlFor(skill?.icon)} alt="" />
            </li>
          ))}
        </motion.div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Skills;
