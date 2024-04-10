import { z } from 'zod';

export const Route = {
  name: 'BlogDetails',
  params: z.object({
    id: z.string(),
  }),
};
