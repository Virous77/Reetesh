export interface Project {
  codeLink: string;
  desc: string;
  images: string;
  projectLink: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  tags: string[];
}

export type SkillType = {
  about: string;
  icon: string;
  level: string;
  name: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogType = {
  _id: string;
  description: string;
  sanitizedHTML: string;
  slug: string;
  title: string;
  createdAt: string;
  image: string;
};
