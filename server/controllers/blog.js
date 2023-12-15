import Article from "../model/article.js";
import { sendData } from "../utils/function.js";

export const createBlog = async (req, res, next) => {
  const { title, description, sanitizedHTML, image, key } = req.body;

  if (!title || !description || !sanitizedHTML)
    return next({ status: 404, message: "All fields must be filled!" });

  if (!key) return next({ status: 404, message: "Key is missing!" });

  const article = new Article({
    title,
    description,
    sanitizedHTML,
    image,
  });

  try {
    if (key === process.env.KEY) {
      const newArticle = await article.save();
      sendData(res, newArticle);
      return;
    }
    next({ status: 400, message: "You are not authorized for this action" });
  } catch (error) {
    next(error);
  }
};

export const getBlogs = async (req, res) => {
  try {
    const articles = await Article.find();
    sendData(res, articles);
  } catch (error) {
    next(error);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const article = await Article.findOne({ slug: req.params.id });
    sendData(res, article);
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  const { key } = req.body;

  if (!key) return next({ status: 404, message: "Key is missing!" });

  try {
    if (key === process.env.KEY) {
      await Article.findByIdAndDelete(req.params.id);
      return;
    }
    next({ status: 400, message: "You are not authorized for this action" });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  const { key } = req.body;

  if (!key) return next({ status: 404, message: "Key is missing!" });

  try {
    if (key === process.env.KEY) {
      const updateBlog = await Article.findById(req.params.id);

      let article = updateBlog;
      article.title = req.body.title;
      article.image = req.body.image;
      article.description = req.body.description;
      article.sanitizedHTML = req.body.sanitizedHTML;
      article = await article.save();
      return;
    }
    next({ status: 400, message: "You are not authorized for this action" });
  } catch (error) {
    next(error);
  }

  res.render("article/show", { article: article });
};
