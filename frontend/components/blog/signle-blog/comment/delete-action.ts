'use server';

import dbConnect from '@/db/mongoose';
import blogComments, { TBlog } from '@/models/blog-comments';
import z from 'zod';

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
    await blogComments.findByIdAndDelete(validate.commentId);
    return {
      message: 'Comment deleted successfully',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw new Error('Failed to delete comment');
  }
};
