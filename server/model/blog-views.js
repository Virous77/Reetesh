import mongoose from "mongoose";

const BlogViews = new mongoose.Schema({
  blogId: {
    type: String,
    required: true,
  },
  viewsId: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("BlogViews", BlogViews);
