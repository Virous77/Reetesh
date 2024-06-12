'use server';

import dbConnect from '@/db/mongoose';
import blogComments, { TBlog } from '@/models/blog-comments';
import z from 'zod';
import { commonError } from './action';

const schema = z.object({
  commentId: z.string().min(1, { message: 'Comment id is required' }),
  userId: z.string().min(1, { message: 'User id is required' }),
});

export const deleteCommentAction = async (input: z.infer<typeof schema>) => {
  try {
    const validate = schema.parse(input);

    await dbConnect();
    const findComment: TBlog | null = await blogComments.findById(
      validate.commentId
    );
    if (!findComment) {
      throw new Error('Comment not found');
    }
    if (findComment.userId !== validate.userId) {
      throw new Error('You are not authorized to delete this comment');
    }

    if (findComment.parent) {
      let updatedComment: TBlog | null = null;
      if (findComment.children.length === 0) {
        updatedComment = await blogComments.findByIdAndUpdate(
          findComment.parent,
          {
            $pull: { children: validate.commentId },
          },
          { new: true }
        );
      }

      if (updatedComment?.isDeleted && updatedComment.children.length === 0) {
        await blogComments.findByIdAndDelete(findComment.parent);
      }
    }

    if (findComment.children.length > 0) {
      await blogComments.findByIdAndUpdate(validate.commentId, {
        isDeleted: true,
      });
    } else {
      await blogComments.findByIdAndDelete(validate.commentId);
    }

    return {
      message: 'Comment deleted successfully',
    };
  } catch (error) {
    commonError(error, 'Failed to delete comment');
  }
};
