import mongoose from 'mongoose';

interface IBlogComment {
  blogId: string;
  comment: string;
  userId: string;
  like: string[];
  dislike: string[];
  parent: string | null;
  isDeleted: boolean;
}

type MongoBlogComment = IBlogComment &
  mongoose.Document & {
    children: mongoose.Types.ObjectId[];
  };

export type TBlog = IBlogComment & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  children: TBlog[];
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
      type: String,
      default: null,
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
