import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const animateWord = ["M", "y", "s", "e", "l", "f"];

  return (
    <section className="about">
      <div className="aboutGreet">
        <h2 className="styleh2">About Me</h2>
      </div>

      <div className="aboutGrid">
        <motion.div
          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{ duration: 1.4 }}
          className="aboutInfoSection"
        >
          <h1>
            <div className="my">
              {["M", "y", ","].map((word) => (
                <p>{word}</p>
              ))}
            </div>
            <div className="my2">
              {animateWord.map((word) => (
                <p>{word}</p>
              ))}
            </div>
            <span>&</span>
            <span>I</span>
          </h1>
          <div className="aboutMe">
            <p>
              I'm a Fullstack Developer based in Patna(India), with a strong
              passion for crafting dynamic and user-centric web apps. I excel in
              both frontend and backend development, combining my skills to
              create seamless, feature-rich experiences. From designing
              intuitive user interfaces to building efficient server logic.
            </p>

            <p>
              As a Full-Stack developer, I have extensive experience in building
              user interfaces using <span>REACT</span>, <span>NEXT.JS</span>,{" "}
              <span>JAVASCRIPT</span>, <span>TYPESCRIPT</span>, <span>CSS</span>
              , and <span>SASS</span>, <span>Tailwind</span>. and server using{" "}
              <span>Node.js</span>, <span>Express</span>, <span>MongoDB</span>.
              I am proficient in designing and developing responsive and
              mobile-first web apps that are optimized for performance and
              accessibility. and same time Scalable, Secure, Reliable servers.
            </p>

            <p>
              In addition to technical skills, I also have a strong eye for
              design and a passion for creating visually stunning and intuitive
              user interfaces. I understand the importance of designing
              interfaces that are easy to use and accessible to all users,
              regardless of their abilities or devices.
            </p>

            <p>
              Interested in the entire Full-Stack spectrum and working on
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
