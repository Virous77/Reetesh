import MyProjects from '@/components/projects/my-projects';
import Sidebar from '@/components/projects/sidebar';
import { serverClient } from '@/trpc-client/server';

const ProjectsPage = async () => {
  const projects = await serverClient.projects.getProjects();

  return (
    <main className=" l-template relative flex h-fit flex-col items-start gap-4 pb-4 pt-[15px] md:grid md:h-screen md:p-[30px] md:pb-0 md:pt-[11px]">
      <MyProjects projects={projects} />
      <Sidebar />
    </main>
  );
};

export default ProjectsPage;
