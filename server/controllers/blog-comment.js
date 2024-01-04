import blogComment from "../model/blog-comment.js";
import { handleCallback, sendResponse } from "../utils/function.js";
import { sendCommentMail } from "../utils/sendEmail.js";

export const createBlogComment = handleCallback(async (req, res) => {
  await blogComment.create(req.body);
  sendCommentMail({
    url: `https://reetesh.in/blog/${req.body.blogId}`,
    comment: req.body.comment,
    blogId: req.body.blogId,
  });

  sendResponse({
    res,
    status: true,
    message: "Comment created successfully",
    code: 201,
  });
});

export const getBlogComment = handleCallback(async (req, res) => {
  const { blogId } = req.params;
  const comments = await blogComment.find({ blogId }).sort({ createdAt: -1 });
  sendResponse({
    res,
    status: true,
    message: "Comments fetched successfully",
    code: 200,
    data: comments,
  });
});
