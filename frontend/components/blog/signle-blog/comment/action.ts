'use server';

import z from 'zod';
import { revalidatePath } from 'next/cache';
import dbConnect from '@/db/mongoose';
import blogComments, { TBlog } from '@/models/blog-comments';
import CommentEmail from '@/components/email/blogComment-mail';
import { Resend } from 'resend';
import { createClient } from '@vercel/kv';

const schema = z.object({
  blogId: z.string().min(1, { message: 'Blog id is required' }),
  userId: z.string().min(1, { message: 'User id is required' }),
  comment: z.string().min(1, { message: 'Comment is required' }),
  parentId: z.string().optional(),
});

export default async function action(path: string) {
  revalidatePath(`/blog/${path}`);
}

const resend = new Resend(process.env.RESEND_API_KEY);

const commentMail = async (
  comment: string,
  blogId: string,
  shouldMail: boolean | undefined
) => {
  if (process.env.NODE_ENV === 'development') return;
  if (!shouldMail) return;

  const data = await resend.emails.send({
    from: process.env.EMAIL!,
    to: process.env.SEND_TO!,
    subject: 'New  Blog Comment! 🥳',
    react: CommentEmail({ comment, blogId }),
  });

  if (!data.error) {
    return 'Success!';
  } else {
    return 'Failed!';
  }
};

const restrictSpamComment = async (userId: string) => {
  if (process.env.NODE_ENV === 'development') return;

  const kv = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  const user: number | null = await kv.get(`comment:${userId}`);

  if (user === 5) {
    throw new Error('You have reached the maximum comment limit');
  } else if (user) {
    await kv.set(`comment:${userId}`, user + 1, {
      ex: 300,
    });
    return false;
  } else {
    await kv.set(`comment:${userId}`, 1, {
      ex: 300,
    });
    return true;
  }
};

export const commonError = (error: unknown, message: string) => {
  if (error instanceof z.ZodError) {
    throw new Error(error.errors[0].message);
  } else if (error instanceof Error) {
    throw new Error(error.message);
  }
  throw new Error(message);
};

type TInput = z.infer<typeof schema>;

export const createComment = async (params: TInput) => {
  try {
    const validate = schema.parse(params);
    const shouldMail = await restrictSpamComment(validate.userId);

    await dbConnect();
    await blogComments.create({
      ...validate,
      parent: null,
    });

    commentMail(validate.comment, validate.blogId, shouldMail);

    return 'Comment added successfully';
  } catch (error) {
    commonError(error, 'Failed to add comment');
  }
};

export const createReplyComment = async (params: TInput) => {
  try {
    const validate = schema.parse(params);
    const shouldMail = await restrictSpamComment(validate.userId);

    await dbConnect();
    const newComment: TBlog = await blogComments.create({
      ...validate,
      parent: validate.parentId,
    });
    await blogComments.findByIdAndUpdate(params.parentId, {
      $push: { children: newComment._id },
    });

    commentMail(validate.comment, validate.blogId, shouldMail);

    return 'Comment added successfully';
  } catch (error) {
    commonError(error, 'Failed to add comment');
  }
};
