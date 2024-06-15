import MyProjects from '@/components/projects/my-projects';
import Sidebar from '@/components/projects/sidebar';
import dbConnect from '@/db/mongoose';
import projects, { TProject } from '@/models/projects';

const getProjects = async () => {
  await dbConnect();
  const projectList: TProject[] = await projects.find().sort({ weight: 1 });
  return projectList;
};

const ProjectsPage = async () => {
  const projects = await getProjects();

  return (
    <main className="l-template relative flex h-fit flex-col items-start gap-4 pb-4 pt-[15px] md:grid md:h-screen md:p-[30px] md:pb-0 md:pt-[11px]">
      <MyProjects projects={projects} />
      <Sidebar />
    </main>
  );
};

export default ProjectsPage;
