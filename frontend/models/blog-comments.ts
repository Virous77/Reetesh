import mongoose from 'mongoose';

interface IBlogComment {
  blogId: string;
  comment: string;
  userId: string;
}

interface MongoBlogComment extends IBlogComment, mongoose.Document {}

export type TBlog = IBlogComment & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

const BlogCommentSchema = new mongoose.Schema<MongoBlogComment>(
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

export default mongoose.models.BlogComment ||
  mongoose.model<MongoBlogComment>('BlogComment', BlogCommentSchema);
