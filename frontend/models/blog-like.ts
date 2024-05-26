import mongoose from 'mongoose';

interface IBlogLike {
  blogId: string;
  like: string[];
}

interface MongoBlogLike extends IBlogLike, mongoose.Document {}

export type TBlogLike = IBlogLike & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

const BlogLikeSchema = new mongoose.Schema<MongoBlogLike>(
  {
    blogId: {
      type: String,
      required: true,
    },
    like: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.BlogLike ||
  mongoose.model<MongoBlogLike>('BlogLike', BlogLikeSchema);
