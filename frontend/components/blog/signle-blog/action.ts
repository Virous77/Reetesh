'use server';

import dbConnect from '@/db/mongoose';
import blogLike, { TBlogLike } from '@/models/blog-like';
import blogViews, { TBlogViews } from '@/models/blog-views';
import z from 'zod';

const schema = z.object({
  blogId: z.string().min(1, { message: 'Blog id is required' }),
  viewsId: z.string().min(1, { message: 'User id is required' }),
});

export const addViewsAction = async (params: z.infer<typeof schema>) => {
  try {
    const validate = schema.parse(params);

    await dbConnect();
    const findBlog: TBlogViews | null = await blogViews.findOne({
      blogId: validate.blogId,
    });

    if (findBlog) {
      const findUser = findBlog.viewsId.find((id) => id === validate.viewsId);

      if (findUser) {
        return findBlog.viewsId.length;
      }

      const { viewsId } = findBlog;
      const newViews = [...viewsId, validate.viewsId];
      const updateViews: TBlogViews | null = await blogViews.findOneAndUpdate(
        { blogId: validate.blogId },
        { viewsId: newViews },
        { new: true }
      );

      return updateViews?.viewsId?.length;
    } else {
      const createBlog: TBlogViews = await blogViews.create({
        blogId: validate.blogId,
        viewsId: [validate.viewsId],
      });
      return createBlog.viewsId.length;
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw new Error('Failed to add views');
  }
};

type TAddBlogLikeAction = z.input<typeof schema> & {
  like: number;
};

export const addBlogLikeAction = async (params: TAddBlogLikeAction) => {
  try {
    const validate = schema.parse(params);

    await dbConnect();
    const findBlog: TBlogLike | null = await blogLike.findOne({
      blogId: validate.blogId,
    });

    if (findBlog) {
      const findUser = findBlog.like.find((id) => id === validate.viewsId);

      if (findUser) {
        return { totalLike: findBlog.like.length };
      }

      const { like } = findBlog;
      const newViews = [...like, validate.viewsId];
      const updateViews: TBlogLike | null = await blogLike.findOneAndUpdate(
        { blogId: validate.blogId },
        { like: newViews },
        { new: true }
      );

      return { totalLike: updateViews?.like.length };
    } else {
      const createBlog: TBlogLike = await blogLike.create({
        blogId: validate.blogId,
        like: [validate.viewsId],
      });
      return { totalLike: createBlog.like.length };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw new Error('Failed to add like');
  }
};

export const getLikeAction = async ({ blogId }: { blogId: string }) => {
  try {
    await dbConnect();
    const findBlog: TBlogLike | null = await blogLike.findOne({
      blogId,
    });
    return { totalLike: findBlog?.like.length || 0 };
  } catch (error) {
    throw new Error('Failed to get like');
  }
};
