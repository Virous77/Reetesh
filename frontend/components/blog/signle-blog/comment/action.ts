'use server';

import z from 'zod';
import { revalidatePath } from 'next/cache';
import dbConnect from '@/db/mongoose';
import blogComments from '@/models/blog-comments';
import CommentEmail from '@/components/email/blogComment-mail';
import { Resend } from 'resend';

const schema = z.object({
  blogId: z.string().min(1, { message: 'Blog id is required' }),
  userId: z.string().min(1, { message: 'User id is required' }),
  comment: z.string().min(1, { message: 'Comment is required' }),
});

export default async function action(path: string) {
  revalidatePath(`/blog/${path}`);
}

const resend = new Resend(process.env.RESEND_API_KEY);

const commentMail = async (comment: string, blogId: string) => {
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

type TInput = z.infer<typeof schema>;

export const createComment = async (params: TInput) => {
  try {
    const validate = schema.parse(params);

    await dbConnect();
    await blogComments.create({
      ...validate,
    });
    commentMail(validate.comment, validate.blogId);
    return 'Comment added successfully';
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw new Error('Failed to add comment');
  }
};
