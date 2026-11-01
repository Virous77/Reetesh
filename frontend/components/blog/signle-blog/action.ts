'use server';

import dbConnect from '@/db/mongoose';
import { ActionError, toActionError } from '@/lib/action-error';
import { blogIdSchema, visitorIdSchema } from '@/lib/blog-schema';
import { rateLimit } from '@/lib/rate-limit';
import blogLike, { TBlogLike } from '@/models/blog-like';
import blogViews, { TBlogViews } from '@/models/blog-views';
import { revalidatePath } from 'next/cache';
import z from 'zod';

const schema = z.object({
  blogId: blogIdSchema,
  viewsId: visitorIdSchema,
});

export const addViewsAction = async (params: z.infer<typeof schema>) => {
  try {
    const validate = schema.parse(params);

    await dbConnect();

    const { allowed } = await rateLimit('views', 120, 3600);
    if (!allowed) {
      const findBlog: TBlogViews | null = await blogViews.findOne({
        blogId: validate.blogId,
      });
      return findBlog?.viewsId.length ?? 0;
    }

    const updated: TBlogViews | null = await blogViews.findOneAndUpdate(
      { blogId: validate.blogId },
      { $addToSet: { viewsId: validate.viewsId } },
      { upsert: true, returnDocument: 'after' }
    );

    return updated?.viewsId.length ?? 0;
  } catch (error) {
    console.error('Failed to add views', error);
    return 0;
  }
};

type TAddBlogLikeAction = z.input<typeof schema> & {
  like: number;
};

export const addBlogLikeAction = async (params: TAddBlogLikeAction) => {
  try {
    const validate = schema.parse(params);

    const { allowed } = await rateLimit('blog-like', 30, 3600);
    if (!allowed) {
      throw new ActionError('Too many likes, please try again later');
    }

    await dbConnect();
    const updated: TBlogLike | null = await blogLike.findOneAndUpdate(
      { blogId: validate.blogId },
      { $addToSet: { like: validate.viewsId } },
      { upsert: true, returnDocument: 'after' }
    );

    revalidatePath(`/blog/${validate.blogId}`);
    return { totalLike: updated?.like.length ?? 0 };
  } catch (error) {
    return toActionError(error, 'Failed to add like');
  }
};

export const getLikeAction = async ({ blogId }: { blogId: string }) => {
  try {
    const id = blogIdSchema.parse(blogId);

    await dbConnect();
    const findBlog: TBlogLike | null = await blogLike.findOne({ blogId: id });
    return { totalLike: findBlog?.like.length || 0 };
  } catch (error) {
    console.error('Failed to get like', error);
    return { totalLike: 0 };
  }
};
