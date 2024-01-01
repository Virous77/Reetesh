import blogViews from "../model/blog-views.js";
import { handleCallback, sendResponse } from "../utils/function.js";

export const addViews = handleCallback(async (req, res) => {
  const { blogId, newView } = req.body;
  const findBlog = await blogViews.findOne({ blogId });

  if (findBlog) {
    const findUser = findBlog.viewsId.find((item) => item === newView);
    if (findUser) {
      return sendResponse({
        message: "User already viewed this blog",
        status: true,
        code: 200,
        res,
        data: findBlog.viewsId.length,
      });
    }

    const { viewsId } = findBlog;
    const newViews = [...viewsId, newView];
    const updateViews = await blogViews.findOneAndUpdate(
      { blogId },
      { viewsId: newViews },
      { new: true }
    );

    return sendResponse({
      message: "Views fetched successfully",
      status: true,
      code: 200,
      res,
      data: updateViews.viewsId.length,
    });
  } else {
    const createView = await blogViews.create({
      blogId,
      viewsId: [newView],
    });

    return sendResponse({
      message: "Views fetched successfully",
      status: true,
      code: 201,
      res,
      data: createView.viewsId.length,
    });
  }
});
