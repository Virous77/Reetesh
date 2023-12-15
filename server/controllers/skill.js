import Skill from "../model/Skill.js";
import { sendData } from "../utils/function.js";

export const createSkill = async (req, res, next) => {
  const { key, ...rest } = req.body;
  const newSkill = new Skill(rest);

  if (!key) return next({ status: 404, message: "Key is missing!" });

  try {
    if (key === process.env.KEY) {
      const saveSkill = await newSkill.save();
      sendData(res, saveSkill, 201);
      return;
    }

    next({ status: 400, message: "You are not authorized for this action" });
  } catch (error) {
    next(error);
  }
};

export const getSkills = async (req, res, next) => {
  try {
    const allSkill = await Skill.find();
    sendData(res, allSkill);
  } catch (error) {
    next(error);
  }
};
