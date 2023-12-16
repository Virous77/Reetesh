import { getServerData } from "@/api/server-api";
import ProjectClient from "./project-render";
import { TProject, TQueryData } from "@/types/type";
import ProjectList from "./project-list";

type TResponse = TQueryData & {
  data: TProject[];
};

const Project = async () => {
  const projects: TResponse = await getServerData({
    endpoint: "/projects",
    tag: "projects",
  });

  return (
    <ProjectClient
      projectComp={
        <ProjectList projects={projects.data?.slice(0, 5)} isActive />
      }
    />
  );
};

export default Project;
