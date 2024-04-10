import { z } from 'zod';

export const Route = {
  name: 'Root',
  params: z.object({}),
};
