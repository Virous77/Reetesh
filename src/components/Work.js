import React, { useState } from "react";
import "../styles/Work.css";
import { useFunctionContext } from "../store/functionContext";
import Loader from "./UI/Loader";
import { urlFor } from "../client";
import { MdOutlineCancel } from "react-icons/md";
import ModalWindow from "./ModalWindow";
import { motion } from "framer-motion";

const Work = () => {
  const { work, isLoading, getProjectId, singleData, dataFetching } =
    useFunctionContext();
  const [show, setShow] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="work">
      <div className="workGrid">
        {work.map((project) => {
          return (
            <motion.div
              key={project._id}
              className="projectPic"
              whileInView={{ opacity: [0, 1], scale: [0, 1] }}
              transition={{ duration: 0.3 }}
            >
              <img src={urlFor(project?.imgUrl)} alt={project.title} />
              <div
                className="projectViewHover"
                onClick={() => {
                  getProjectId(project._id);
                  setShow(true);
                  document.body.classList.add("cool");
                }}
              >
                <p>View Project</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {show && (
        <div
          className="backdrop"
          onClick={() => {
            document.body.classList.remove("cool");
            setShow(false);
          }}
        ></div>
      )}

      {show && (
        <div className="singleData">
          <MdOutlineCancel
            className="cancelIcon"
            onClick={() => {
              document.body.classList.remove("cool");
              setShow(false);
            }}
          />
          {singleData?.map((item) => (
            <ModalWindow item={item} dataFetching={dataFetching} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Work;
