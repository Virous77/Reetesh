import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
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

export default mongoose.model("Project", ProjectSchema);
