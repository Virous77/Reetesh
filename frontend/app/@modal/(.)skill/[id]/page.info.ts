import { z } from "zod";

export const Route = {
  name: "ModalSkillId",
  params: z.object({
    id: z.string(),
  })
};

