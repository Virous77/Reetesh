'use server';

import dbConnect from '@/db/mongoose';
import blogComments, { TBlog } from '@/models/blog-comments';
import z from 'zod';
import { ActionError, toActionError } from '@/lib/action-error';
import { commentIdSchema, visitorIdSchema } from '@/lib/blog-schema';
import { rateLimit } from '@/lib/rate-limit';
import { revalidatePath } from 'next/cache';

const schema = z.object({
  commentId: commentIdSchema,
  userId: visitorIdSchema,
  type: z.enum(['like', 'dislike'], {
    message: 'Type must be like or dislike',
  }),
});

export const addLikeAction = async (input: z.infer<typeof schema>) => {
  try {
    const validate = schema.parse(input);

    const { allowed } = await rateLimit('comment-like', 60, 300);
    if (!allowed) {
      throw new ActionError('Too many likes, please try again later');
    }

    await dbConnect();
    const findComment: TBlog | null = await blogComments.findById(
      validate.commentId
    );
    if (!findComment) {
      throw new ActionError('Comment not found');
    }
    const findLikeUser = findComment.like.find((id) => id === validate.userId);
    const findDislikeUser = findComment.dislike.find(
      (id) => id === validate.userId
    );
    revalidatePath(`/blog/${findComment.blogId}`);

    if (findLikeUser || findDislikeUser) {
      await blogComments.findByIdAndUpdate(validate.commentId, {
        [validate.type === 'like' ? 'dislike' : 'like']: findComment[
          validate.type as 'like' | 'dislike'
        ].filter((id) => id !== validate.userId),
      });
    }

    if (validate.type === 'like' && findLikeUser) {
      await blogComments.findByIdAndUpdate(validate.commentId, {
        like: findComment.like.filter((id) => id !== validate.userId),
      });

      return {
        message: 'Liked removed successfully',
      };
    }

    if (validate.type === 'dislike' && findDislikeUser) {
      await blogComments.findByIdAndUpdate(validate.commentId, {
        dislike: findComment.dislike.filter((id) => id !== validate.userId),
      });

      return {
        message: 'Disliked removed successfully',
      };
    }

    await blogComments.findByIdAndUpdate(validate.commentId, {
      [validate.type]: [
        ...findComment[validate.type as 'like' | 'dislike'],
        validate.userId,
      ],
    });
    return {
      message: `${validate.type}d successfully`,
    };
  } catch (error: unknown) {
    return toActionError(error, 'Failed to add like');
  }
};
