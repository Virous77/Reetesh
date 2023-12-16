import { getServerData } from "@/api/server-api";
import { TProject, TQueryData } from "@/types/type";
import MyProjects from "@/components/projects/my-projects";

type TResponse = TQueryData & {
  data: TProject[];
};

const ProjectsPage = async () => {
  const projects: TResponse = await getServerData({
    endpoint: "/projects",
    tag: "my-projects",
  });
  return <MyProjects projects={projects.data} />;
};

export default ProjectsPage;
