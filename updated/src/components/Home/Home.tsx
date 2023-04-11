import React from "react";
import { motion } from "framer-motion";
import Reetesh from "../../assets/image.jpg";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <motion.header className="home">
        <motion.div
          className="badgeSection"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 1.1 }}
        >
          <span>👋</span>
          <div>
            <h1>A self motivated Frontend Developer.</h1>
          </div>
        </motion.div>

        <motion.div
          className="contentAbout"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.2 }}
        >
          <p>
            I love Building fast, responsive, and accessible websites that
            engage and delight users.
          </p>
        </motion.div>

        <motion.div
          className="contentImg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1.3 }}
        >
          <img src={Reetesh} alt="Reetesh" />
        </motion.div>
      </motion.header>

      <motion.div
        className="sideBar"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <a href="https://github.com/Virous77" target="_blank">
          <BsGithub className="githubIcon" />
        </a>

        <a
          href="
          https://twitter.com/imbitcoinb
          "
          target="_blank"
        >
          <BsTwitter className="twitterIcon" />
        </a>

        <a
          href="
          https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BlLFnKZvySiCcK4N0OkM3%2FQ%3D%3D
          "
          target="_blank"
        >
          <BsLinkedin className="linkdIcon" />
        </a>
      </motion.div>
    </>
  );
};

export default Home;
