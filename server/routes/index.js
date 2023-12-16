import express from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
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
import {
  ArticleValidate,
  EmailValidate,
  ProjectValidate,
  SkillValidate,
} from "../validation/validate.js";
import { authenticate } from "../middleware/middleware.js";

const router = express.Router();

//Projects
router.post("/projects", [authenticate, ProjectValidate], createProject);
router.get("/projects", [authenticate], getAllProjects);
router.delete("/projects/:id", [authenticate], deleteProject);

//Email
router.post("/send-email", [authenticate, EmailValidate], sendAutoMatedEmail);

//Skills
router.post("/skills", [SkillValidate], createSkill);
router.get("/skills", [authenticate], getSkills);

//blog
router.post("/articles", [authenticate, ArticleValidate], createBlog);
router.get("/articles", [authenticate], getBlogs);
router.put("/articles", [authenticate], updateBlog);
router.delete("/articles", [authenticate], deleteBlog);
router.get("/articles/:id", [authenticate], getBlog);

export default router;
