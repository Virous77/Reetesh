import { getServerData } from "@/api/server-api";
import MyProjects from "@/components/projects/my-projects/my-projects";
import Sidebar from "@/components/projects/my-projects/sidebar";
import { TProject, TQueryData } from "@/types/type";

type TResponse = TQueryData & {
  data: TProject[];
};

const ProjectsPage = async () => {
  const projects: TResponse = await getServerData({
    endpoint: "/projects",
    tag: "my-projects",
  });

  return (
    <main className=" md:grid flex l-template items-start gap-4 h-fit md:h-screen md:p-[30px] relative flex-col pb-4 md:pb-0">
      <MyProjects projects={projects.data} />
      <Sidebar />
    </main>
  );
};

export default ProjectsPage;
