import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: String,
    },
    about: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export default mongoose.model("Skill", SkillSchema);
