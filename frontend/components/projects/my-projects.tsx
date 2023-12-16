import { TProject } from "@/types/type";

type TMyProjects = {
  projects: TProject[];
};

const MyProjects: React.FC<TMyProjects> = ({ projects }) => {
  return <div>MyProjects</div>;
};

export default MyProjects;
