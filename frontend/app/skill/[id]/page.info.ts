import { z } from 'zod';

export const Route = {
  name: 'SkillId',
  params: z.object({
    id: z.string(),
  }),
};
