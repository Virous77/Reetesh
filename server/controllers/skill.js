import Skill from "../model/Skill.js";
import { handleCallback, sendResponse } from "../utils/function.js";

export const createSkill = handleCallback(async (req, res) => {
  await Skill.create(req.body);
  sendResponse({
    message: "Skill created successfully",
    status: true,
    code: 201,
    res,
  });
});

export const getSkills = handleCallback(async (req, res) => {
  const allSkill = await Skill.find().sort({ level: -1 });
  sendResponse({
    message: "Skills fetched successfully",
    status: true,
    code: 200,
    res,
    data: allSkill,
  });
});
