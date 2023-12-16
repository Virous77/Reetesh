import Article from "../model/article.js";
import { handleCallback, sendResponse } from "../utils/function.js";

export const createBlog = handleCallback(async (req, res) => {
  await Article.create(req.body);
  sendResponse({
    message: "Article created successfully",
    status: true,
    code: 201,
    res,
  });
});

export const getBlogs = handleCallback(async (req, res) => {
  const articles = await Article.find();
  sendResponse({
    message: "Articles fetched successfully",
    status: true,
    code: 200,
    res,
    data: articles,
  });
});

export const getBlog = handleCallback(async (req, res) => {
  const article = await Article.findOne({ slug: req.params.id });
  sendResponse({
    message: "Article fetched successfully",
    status: true,
    code: 200,
    res,
    data: article,
  });
});

export const deleteBlog = handleCallback(async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  sendResponse({
    message: "Article deleted successfully",
    status: true,
    code: 200,
    res,
  });
});

export const updateBlog = handleCallback(async (req, res) => {
  await Article.findByIdAndUpdate(req.params.id, req.body);
  sendResponse({
    message: "Article updated successfully",
    status: true,
    code: 200,
    res,
  });
});
