import { publicProcedure, router } from "./index";
import { skillRouter } from "./routes/skill-router";
import { projectRouter } from "./routes/project-router";
import { blogRouter } from "./routes/blog-router";
import z from "zod";

export const appRouter = router({
  skills: skillRouter,
  projects: projectRouter,
  blogs: blogRouter,
  createUser: publicProcedure
    .input((v) => {
      const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      });
      const result = schema.safeParse(v);
      if (!result.success) {
        throw result.error;
      }
      return result.data;
    })
    .mutation(async (params) => {
      console.log(params);

      return {
        user: "hello",
      };
    }),
});

export type AppRouter = typeof appRouter;
