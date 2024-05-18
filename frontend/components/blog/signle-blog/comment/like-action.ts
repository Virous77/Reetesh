'use server';

import dbConnect from '@/db/mongoose';
import blogComments, { TBlog } from '@/models/blog-comments';
import z from 'zod';

const schema = z.object({
  commentId: z.string().min(1, { message: 'Comment id is required' }),
  userId: z.string().min(1, { message: 'User id is required' }),
  type: z.enum(['like', 'dislike'], {
    message: 'Type must be like or dislike',
  }),
});

export const addLikeAction = async (input: z.infer<typeof schema>) => {
  try {
    const validate = schema.parse(input);

    await dbConnect();
    const findComment: TBlog | null = await blogComments.findById(
      validate.commentId
    );
    if (!findComment) {
      throw new Error('Comment not found');
    }
    const findLikeUser = findComment.like.find((id) => id === validate.userId);
    const findDislikeUser = findComment.dislike.find(
      (id) => id === validate.userId
    );
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
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw new Error('Failed to add like');
  }
};
