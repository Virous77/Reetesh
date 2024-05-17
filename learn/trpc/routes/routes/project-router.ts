import dbConnect from "@/db/mongoose";
import { publicProcedure, router } from "..";
import projects, { TProject } from "@/models/projects";

export const projectRouter = router({
  getProjects: publicProcedure.query(async () => {
    await dbConnect();
    const projectList: TProject[] = await projects.find().sort({ weight: 1 });
    return projectList;
  }),
  getLatestProject: publicProcedure.query(async () => {
    await dbConnect();
    const latestProject: TProject = await projects
      .findOne()
      .sort({ createdAt: -1 });
    return latestProject;
  }),
});

export type ProjectRouter = typeof projectRouter;
