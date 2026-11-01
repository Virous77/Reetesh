'use server';

import z from 'zod';
import { revalidatePath } from 'next/cache';
import dbConnect from '@/db/mongoose';
import blogComments, { TBlog } from '@/models/blog-comments';
import { commentEmailHtml } from '@/components/email/blogComment-mail';
import { Resend } from 'resend';
import turndonw from 'turndown';
import sanitizeHtml from 'sanitize-html';
import { ActionError, toActionError } from '@/lib/action-error';
import {
  blogIdSchema,
  commentIdSchema,
  visitorIdSchema,
} from '@/lib/blog-schema';
import { rateLimit } from '@/lib/rate-limit';

const MAX_COMMENT_LENGTH = 10000;

const schema = z.object({
  blogId: blogIdSchema,
  userId: visitorIdSchema,
  comment: z
    .string()
    .min(1, { message: 'Comment is required' })
    .max(MAX_COMMENT_LENGTH, { message: 'Comment is too long' }),
  parentId: commentIdSchema.optional(),
});

const turndownService = new turndonw();
const resend = new Resend(process.env.RESEND_API_KEY);

const commentMail = async (comment: string, blogId: string) => {
  if (process.env.NODE_ENV === 'development') return;

  const { error } = await resend.emails.send({
    from: process.env.EMAIL!,
    to: process.env.SEND_TO!,
    subject: 'New  Blog Comment! 🥳',
    html: commentEmailHtml({
      comment: turndownService.turndown(comment),
      blogId,
    }),
  });

  if (error) console.error('Failed to send comment mail', error);
};

type TInput = z.infer<typeof schema>;

const commonAction = async (params: TInput) => {
  const { comment, ...rest } = schema.parse(params);

  const { allowed, count } = await rateLimit('comment', 5, 300);
  if (!allowed) {
    throw new ActionError('You have reached the maximum comment limit');
  }

  await dbConnect();

  if (rest.parentId) {
    const parent: TBlog | null = await blogComments.findById(rest.parentId);
    if (!parent || parent.blogId !== rest.blogId) {
      throw new ActionError('Comment not found');
    }
  }

  const newComment: TBlog = await blogComments.create({
    ...rest,
    parent: rest.parentId || null,
    comment: sanitizeHtml(comment, {
      allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
      allowedAttributes: {
        a: ['href'],
        img: ['src', 'alt'],
      },
      allowedSchemes: ['http', 'https', 'mailto'],
      allowProtocolRelative: false,
    }),
  });

  if (rest.parentId) {
    await blogComments.findByIdAndUpdate(rest.parentId, {
      $push: { children: newComment._id },
    });
  }

  revalidatePath(`/blog/${rest.blogId}`);

  // One mail per rate-limit window so a burst cannot flood the inbox.
  if (count === 1) {
    await commentMail(sanitizeHtml(comment), rest.blogId).catch((error) =>
      console.error('Failed to send comment mail', error)
    );
  }
};

export const createComment = async (params: TInput) => {
  try {
    await commonAction(params);
    return { message: 'Comment added successfully' };
  } catch (error) {
    return toActionError(error, 'Failed to add comment');
  }
};

export const createReplyComment = async (params: TInput) => {
  try {
    await commonAction(params);
    return { message: 'Comment added successfully' };
  } catch (error) {
    return toActionError(error, 'Failed to add comment');
  }
};
