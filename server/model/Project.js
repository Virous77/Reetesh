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
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export default mongoose.model("Project", ProjectSchema);
