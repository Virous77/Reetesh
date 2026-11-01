import { allPosts } from '@/.contentlayer/generated';
import z from 'zod';

const blogIds = new Set(allPosts.map((post) => post.slugAsParams));

export const blogIdSchema = z
  .string()
  .max(200, { message: 'Blog not found' })
  .refine((id) => blogIds.has(id), { message: 'Blog not found' });

export const visitorIdSchema = z.uuid({ message: 'Invalid user id' });

export const commentIdSchema = z
  .string()
  .regex(/^[a-f\d]{24}$/i, { message: 'Invalid comment id' });
