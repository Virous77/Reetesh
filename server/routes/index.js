import express from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getSingleProject,
} from "../controllers/project.js";
import { sendAutoMatedEmail } from "../controllers/email.js";
import { createSkill, getSkills } from "../controllers/skill.js";
import {
  createBlog,
  updateBlog,
  getBlogs,
  deleteBlog,
  getBlog,
} from "../controllers/blog.js";

const router = express.Router();

//Projects
router.post("/projects", createProject);
router.get("/projects", getAllProjects);
router.get("/projects/:id", getSingleProject);
router.delete("/projects/:id", deleteProject);

//Email
router.post("/send-email", sendAutoMatedEmail);

//Skills
router.post("/skills", createSkill);
router.get("/skills", getSkills);

//blog
router.post("/articles", createBlog);
router.get("/articles", getBlogs);
router.put("/articles", updateBlog);
router.delete("/articles", deleteBlog);
router.get("/articles/:id", getBlog);

export default router;
