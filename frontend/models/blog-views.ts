import mongoose from "mongoose";

interface IBlogViews {
  blogId: string;
  viewsId: string[];
  createdAt: Date;
}

interface MongoBlogViews extends IBlogViews, mongoose.Document {}

export type TBlogViews = IBlogViews & {
  _id: string;
};

const BlogViewsSchema = new mongoose.Schema<MongoBlogViews>({
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

export default mongoose.models.BlogViews ||
  mongoose.model<MongoBlogViews>("BlogViews", BlogViewsSchema);
