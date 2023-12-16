export type TProject = {
  _id: string;
  title: string;
  desc: string;
  projectLink: string;
  codeLink: string;
  tags: string[];
  images: string;
  createdAt: string;
  updatedAt: string;
  weight: number;
  develop: string;
};

export type TQueryData = {
  status: number;
  success: boolean;
};

export type TSkill = {
  _id: string;
  name: string;
  level: string;
  createdAt: string;
  updatedAt: string;
  about: string;
  icon: string;
};
