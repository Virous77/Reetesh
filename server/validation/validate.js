import joi from "joi";
import { createError } from "../utils/function.js";

export const common = async ({ req, res, next, schema }) => {
  try {
    const result = await schema.validateAsync(req.body);
    if (result) {
      next();
    }
  } catch (error) {
    next(createError({ status: 400, message: error.message }));
  }
};

export const ArticleValidate = async (req, res, next) => {
  const schema = joi
    .object({
      title: joi.string().trim().required(),
      description: joi.string().trim().required(),
      slug: joi.string().trim().required(),
      sanitizedHTML: joi.string().trim().required(),
      image: joi.string().trim().required(),
    })
    .options({ stripUnknown: true });
  return common({ req, res, next, schema });
};

export const EmailValidate = async (req, res, next) => {
  const schema = joi
    .object({
      userName: joi.string().trim().required(),
      message: joi.string().trim().required(),
      email: joi.string().email().required(),
    })
    .options({ stripUnknown: true });
  return common({ req, res, next, schema });
};

export const ProjectValidate = async (req, res, next) => {
  const schema = joi
    .object({
      title: joi.string().trim().required(),
      codeLink: joi.string().trim().required(),
      projectLink: joi.string().trim().required(),
      desc: joi.string().trim().required(),
      images: joi.string().trim().required(),
      weight: joi.string().required(),
      develop: joi.string().trim().required(),
      tags: joi.array().items(joi.string()),
    })
    .options({ stripUnknown: true });
  return common({ req, res, next, schema });
};

export const SkillValidate = async (req, res, next) => {
  const schema = joi
    .object({
      name: joi.string().trim().required(),
      level: joi.string().trim().required(),
      about: joi.string().trim().required(),
      icon: joi.string().trim().required(),
    })
    .options({ stripUnknown: true });
  return common({ req, res, next, schema });
};
