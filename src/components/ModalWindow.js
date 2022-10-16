import React from "react";
import "../styles/ModalWindown.css";
import { urlFor } from "../client";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

const ModalWindow = ({ item, dataFetching }) => {
  console.log(item);
  const { title, imgUrl, description, codeLink, projectLink } = item;

  if (dataFetching) {
    return <p className="empty">Fetching, Hold a sec..</p>;
  }

  return (
    <section className="activeWindow">
      <div className="modalImgSection">
        <img src={urlFor(imgUrl)} alt={title} />
      </div>

      <div className="modalProjectInfo">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="modalProjectLink">
          <a href={codeLink} target="_blank" className="githubButton">
            <BsGithub className="modalGithubIcon" />
            Github Code
          </a>

          <a href={projectLink} target="_blank" className="projectButton">
            <AiOutlineLink className="modalLinkIcon" />
            Live Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModalWindow;
