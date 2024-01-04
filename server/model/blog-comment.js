import mongoose from "mongoose";

const BlogCommentSchema = new mongoose.Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BlogComment", BlogCommentSchema);
