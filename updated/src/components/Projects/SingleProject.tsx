import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import "./Singleproject.scss";
import { Project } from "../../interfaces/interface";
import svg from "../../assets/react.svg";

type SingleProjectProps = {
  item: Project;
  dataFetching: boolean;
};

const SingleProject: React.FC<SingleProjectProps> = ({
  item,
  dataFetching,
}) => {
  console.log(item);

  if (dataFetching) {
    return <p className="empty">Fetching, Hold a sec..</p>;
  }

  return (
    <section className="activeWindow">
      <div className="modalImgSection">
        <img
          src={item?.images.length > 10 ? item?.images : svg}
          alt={item?.title}
        />
      </div>

      <div className="modalProjectInfo">
        <h1>{item?.title}</h1>
        <p>{item?.desc}</p>

        <div className="modalProjectLink">
          <a
            href={item?.codeLink}
            target="_blank"
            className="githubButton"
            rel="noreferrer"
          >
            <BsGithub className="modalGithubIcon" />
            Github Code
          </a>

          <a
            href={item?.projectLink}
            target="_blank"
            rel="noreferrer"
            className="projectButton"
          >
            <AiOutlineLink className="modalLinkIcon" />
            Live Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
