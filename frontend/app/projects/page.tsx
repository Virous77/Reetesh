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
    <main className="fade-in-out l-template relative flex h-fit flex-col items-start gap-4 pt-[15px] pb-4 md:grid md:p-[30px] md:pt-[11px] md:pb-0">
      <MyProjects projects={projects} />
      <Sidebar />
    </main>
  );
};

export default ProjectsPage;
