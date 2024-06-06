import mongoose from 'mongoose';

interface IBlogComment {
  blogId: string;
  comment: string;
  userId: string;
  like: string[];
  dislike: string[];
  children: mongoose.Types.ObjectId[];
  parent: boolean;
  isDeleted: boolean;
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
    parent: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
      required: true,
    },
    like: {
      type: [String],
      default: [],
    },
    dislike: {
      type: [String],
      default: [],
    },
    children: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'BlogComment',
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.BlogComment ||
  mongoose.model<MongoBlogComment>('BlogComment', BlogCommentSchema);
