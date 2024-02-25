import dbConnect from '@/db/mongoose';
import { publicProcedure, router } from '..';
import skills, { TSkill } from '@/models/skills';

export const skillRouter = router({
  getSkills: publicProcedure.query(async () => {
    await dbConnect();
    const skillLists: TSkill[] = await skills.find();
    return skillLists;
  }),
});

export type SkillRouter = typeof skillRouter;
