import Project from "../model/Project.js";
import { handleCallback, sendResponse } from "../utils/function.js";

export const createProject = handleCallback(async (req, res) => {
  await Project.create(req.body);
  sendResponse({
    message: "Project created successfully",
    status: true,
    code: 201,
    res,
  });
});

export const getAllProjects = handleCallback(async (req, res) => {
  const projects = await Project.find().sort({ weight: 1 });
  sendResponse({
    message: "Projects fetched successfully",
    status: true,
    code: 200,
    res,
    data: projects,
  });
});

export const deleteProject = handleCallback(async (req, res, next) => {
  await Project.findByIdAndDelete(req.params.id);
  sendResponse({
    message: "Project deleted successfully",
    status: true,
    code: 200,
    res,
  });
});
