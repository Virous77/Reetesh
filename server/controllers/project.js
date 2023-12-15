import Project from "../model/Project.js";
import { sendData } from "../utils/function.js";
import mongoose from "mongoose";

export const createProject = async (req, res, next) => {
  const { key, ...rest } = req.body;
  const newProject = new Project(rest);

  if (!key) return next({ status: 404, message: "Key is missing!" });

  try {
    if (key === process.env.KEY) {
      const saveProject = await newProject.save();
      sendData(res, saveProject, 201);
      return;
    }

    next({ status: 400, message: "You are not authorized for this action" });
  } catch (error) {
    next(error);
  }
};

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ weight: 1 });
    sendData(res, projects);
  } catch (error) {
    next(error);
  }
};

export const getSingleProject = async (req, res, next) => {
  const ObjectId = mongoose.Types.ObjectId;

  if (!ObjectId.isValid(req.params.id)) {
    return next({ status: 404, message: "Id is not valid!" });
  }

  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return next({ status: 404, message: "Ids not exists, Try again!" });
    }
    sendData(res, project);
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  const { key } = req.body;

  try {
    if (key === process.env.KEY) {
      await Project.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json({ message: "Successfully Deleted!", status: 200, success: true });
    } else {
      next({ status: 400, message: "You are not authorized for this action" });
    }
  } catch (error) {
    next(error);
  }
};
