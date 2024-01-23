import dbConnect from "@/db/mongoose";
import { publicProcedure, router } from "..";
import projects, { TProject } from "@/models/projects";

export const projectRouter = router({
  getProjects: publicProcedure.query(async () => {
    await dbConnect();
    const projectList: TProject[] = await projects.find();
    return projectList;
  }),
});

export type ProjectRouter = typeof projectRouter;
