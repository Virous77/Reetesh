'use server';

import dbConnect from '@/db/mongoose';
import blogComments, { TBlog } from '@/models/blog-comments';
import z from 'zod';
import { ActionError, toActionError } from '@/lib/action-error';
import { commentIdSchema, visitorIdSchema } from '@/lib/blog-schema';
import { rateLimit } from '@/lib/rate-limit';
import { revalidatePath } from 'next/cache';
import { adminID } from '@/utils/utils';

const schema = z.object({
  commentId: commentIdSchema,
  userId: visitorIdSchema,
});

export const deleteCommentAction = async (input: z.infer<typeof schema>) => {
  try {
    const validate = schema.parse(input);

    const { allowed } = await rateLimit('comment-delete', 30, 300);
    if (!allowed) throw new ActionError('Too many requests');

    await dbConnect();
    const findComment: TBlog | null = await blogComments.findById(
      validate.commentId
    );
    if (!findComment) {
      throw new ActionError('Comment not found');
    }

    if (!adminID.includes(validate.userId)) {
      if (findComment.userId !== validate.userId) {
        throw new ActionError('You are not authorized to delete this comment');
      }
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

    revalidatePath(`/blog/${findComment.blogId}`);

    return {
      message: 'Comment deleted successfully',
    };
  } catch (error) {
    return toActionError(error, 'Failed to delete comment');
  }
};
