import { getServerData } from "@/api/server-api";
import ProjectClient from "./project-client";
import { TProject, TQueryData } from "@/types/type";

type TResponse = TQueryData & {
  data: TProject[];
};

const Project = async () => {
  const projects: TResponse = await getServerData({
    endpoint: "/projects",
    tag: "projects",
  });

  return <ProjectClient projects={projects.data} />;
};

export default Project;
