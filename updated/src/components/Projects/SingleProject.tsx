import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import "./Singleproject.scss";
import { Project } from "../../interfaces/interface";

type SingleProjectProps = {
  item: Project | undefined;
  dataFetching: boolean;
};

const SingleProject: React.FC<SingleProjectProps> = ({
  item,
  dataFetching,
}) => {
  if (dataFetching) {
    return <p className="empty">Fetching, Hold a sec..</p>;
  }

  return (
    <section className="activeWindow">
      <div className="modalImgSection">
        <img src={item?.images} alt={item?.title} />
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

        {item?.tags && item.tags.length > 0 ? (
          <div className="tech">
            <h3>Technology which I have use to build this project.</h3>

            <div className="tech-list">
              {item?.tags?.map((tag, i) => (
                <p key={i}>{tag}</p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default SingleProject;
