import MyProjects from "@/components/projects/my-projects";
import Sidebar from "@/components/projects/sidebar";
import { serverClient } from "@/trpc-client/server";

const ProjectsPage = async () => {
  const projects = await serverClient.projects.getProjects();

  return (
    <main className=" md:grid flex l-template items-start gap-4 h-fit md:h-screen md:p-[30px] md:pt-[11px] pt-[15px] relative flex-col pb-4 md:pb-0">
      <MyProjects projects={projects} />
      <Sidebar />
    </main>
  );
};

export default ProjectsPage;
