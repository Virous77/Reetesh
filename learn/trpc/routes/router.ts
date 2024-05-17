import { router } from "./index";
import { skillRouter } from "./routes/skill-router";
import { projectRouter } from "./routes/project-router";
import { blogRouter } from "./routes/blog-router";

export const appRouter = router({
  skills: skillRouter,
  projects: projectRouter,
  blogs: blogRouter,
});

export type AppRouter = typeof appRouter;
