import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";
import { SkillType } from "../../interfaces/interface";
import Loader from "../layouts/UI/Loader";

const Skills = () => {
  const { data, isLoading } = useQuery(
    ["skills"],
    (): Promise<SkillType[]> => fetchData("/skills")
  );

  if (isLoading) return <Loader />;

  return (
    <section className="skills">
      <div className="aboutSkillView">
        <h2 className="styleh2">My Skills</h2>

        <div className="skillInfo">
          <motion.p
            whileInView={{ opacity: [0, 1], x: [200, 0] }}
            transition={{ duration: 1.4 }}
            className="skillPara"
          >
            I specialize in crafting top-notch responsive websites that load
            quickly, provide an intuitive user experience, and adhere to best
            coding practices. My primary focus is front-end development,
            including TypeScript, and JavaScript, and I excel in building both
            small and medium-sized web applications.
          </motion.p>

          <motion.p
            whileInView={{ opacity: [0, 1], x: [-200, 0] }}
            transition={{ duration: 1.4 }}
          >
            My expertise extends to client-side applications with modern
            features such as single-page applications (SPA), and I am committed
            to maintaining semantic coding styles to ensure optimal search
            engine optimization (SEO). I leverage the latest technologies, such
            as React (including Next.js) and SASS, to create visually appealing
            and feature-rich web applications that exceed my clients'
            expectations.
          </motion.p>
        </div>
      </div>

      {!isLoading ? (
        <motion.div
          className="mySkillList"
          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{ duration: 1.4 }}
        >
          {data?.map((skill) => (
            <li key={skill?._id}>
              <img src={skill.icon} alt={skill.name} />
            </li>
          ))}
        </motion.div>
      ) : (
        <p>Loading....</p>
      )}
    </section>
  );
};

export default Skills;
