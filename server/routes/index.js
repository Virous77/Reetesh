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
  EmailValidate,
  ProjectValidate,
  SkillValidate,
} from "../validation/validate.js";
import { authenticate } from "../middleware/middleware.js";
import { addViews } from "../controllers/blog.js";

const router = express.Router();

//Projects
router.post("/projects", [authenticate, ProjectValidate], createProject);
router.get("/projects", [authenticate], getAllProjects);
router.get("/project/:id", [authenticate], getSingleProject);
router.delete("/projects/:id", [authenticate], deleteProject);

//Email
router.post("/send-email", [authenticate, EmailValidate], sendAutoMatedEmail);

//Skills
router.post("/skills", [SkillValidate], createSkill);
router.get("/skills", [authenticate], getSkills);

// Blog
router.post("/views", [authenticate], addViews);

export default router;
