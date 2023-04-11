import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="aboutGreet">
        <h2>About Me</h2>
      </div>

      <div className="aboutGrid">
        <motion.div
          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{ duration: 1.4 }}
          className="aboutInfoSection"
        >
          <h1>
            <div className="my">
              <p>M</p>
              <p>y</p>
              <p>,</p>
            </div>
            <div className="my2">
              <p>M</p>
              <p>y</p>
              <p>s</p>
              <p>e</p>
              <p>l</p>
              <p>f</p>
            </div>
            <span>&</span>
            <span>I</span>
          </h1>
          <div className="aboutMe">
            <p>
              I'm a Frontend Web Developer building the Frontend of Websites.
              located in Patna(India). I have a serious passion for Frontend
              Development
            </p>

            <p>
              As a frontend developer, I have extensive experience in building
              user interfaces using <span>REACT</span>, <span>NEXT.JS</span>,{" "}
              <span>JAVASCRIPT</span>, <span>TYPESCRIPT</span>, <span>CSS</span>
              , and <span>SASS</span>. I am proficient in designing and
              developing responsive and mobile-first websites and web
              applications that are optimized for performance and accessibility.
            </p>

            <p>
              In addition to technical skills, I also have a strong eye for
              design and a passion for creating visually stunning and intuitive
              user interfaces. I understand the importance of designing
              interfaces that are easy to use and accessible to all users,
              regardless of their abilities or devices.
            </p>

            <p>
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people. I'm open to Job
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to contact me.
            </p>

            <div className="aboutButton">
              <Link to="/contact">
                <button>Contact me</button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
