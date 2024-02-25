import mongoose from 'mongoose';

interface IProject {
  title: string;
  codeLink: string;
  projectLink: string;
  desc: string;
  tags: string[];
  images: string;
  weight: number;
  develop: string;
}

interface MongoProject extends IProject, mongoose.Document {}

export type TProject = IProject & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

const ProjectSchema = new mongoose.Schema<MongoProject>(
  {
    title: {
      type: String,
      required: true,
    },
    codeLink: {
      type: String,
      required: true,
    },
    projectLink: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
    },
    images: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    develop: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model<MongoProject>('Project', ProjectSchema);
