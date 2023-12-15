import { useState } from "react";
import "./Work.scss";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";
import { Project } from "../../interfaces/interface";
import SingleProject from "./SingleProject";
import ShimmeredParagraphs from "../layouts/UI/Shimmers";

const Work = () => {
  const [show, setShow] = useState("");
  const { data, isLoading } = useQuery(
    ["projects"],
    (): Promise<Project[]> => fetchData("/projects")
  );

  const { data: singleProjectData, isLoading: loading } = useQuery(
    ["project"],
    async (): Promise<Project> => fetchData(`/projects/${show}`),
    {
      enabled: show.length > 1,
    }
  );

  const getProjectId = (id: string) => {
    setShow(id);
  };

  if (isLoading)
    return (
      <div className="workGrid" style={{ padding: "2rem" }}>
        {[...Array(12).fill(1)].map((list, i) => (
          <ShimmeredParagraphs key={i} />
        ))}{" "}
      </div>
    );

  return (
    <section className="work">
      <div className="workGrid">
        {data &&
          data.length > 0 &&
          data?.map((project) => {
            return (
              <motion.div
                key={project._id}
                className="projectPic"
                whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.images} alt={project.title} />
                <div
                  className="projectViewHover"
                  onClick={() => {
                    getProjectId(project._id);
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
            setShow("");
          }}
        ></div>
      )}

      {show && (
        <div className="singleData">
          <MdOutlineCancel
            className="cancelIcon"
            onClick={() => {
              document.body.classList.remove("cool");
              setShow("");
            }}
          />
          <SingleProject item={singleProjectData} dataFetching={loading} />
        </div>
      )}
    </section>
  );
};

export default Work;
