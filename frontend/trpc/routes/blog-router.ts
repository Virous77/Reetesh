import dbConnect from "@/db/mongoose";
import { publicProcedure, router } from "..";
import z from "zod";
import blogComments, { TBlog } from "@/models/blog-comments";
import blogViews, { TBlogViews } from "@/models/blog-views";

export const blogRouter = router({
  getComments: publicProcedure.input(z.string()).query(async (id) => {
    await dbConnect();
    const comments: TBlog[] = await blogComments
      .find({ blogId: id })
      .sort({ createdAt: -1 });
    return comments;
  }),
  createComment: publicProcedure
    .input((v) => {
      const schema = z.object({
        blogId: z.string(),
        userId: z.string(),
        comment: z.string(),
      });

      const validate = schema.safeParse(v);
      if (!validate.success) {
        throw new Error(validate.error.message);
      }
      return validate.data;
    })
    .mutation(async ({ input }) => {
      await dbConnect();
      const comment: TBlog = await blogComments.create({
        ...input,
      });
      return comment;
    }),
  addViews: publicProcedure
    .input((v) => {
      console.log(v);
      const schema = z.object({
        blogId: z.string(),
        viewsId: z.string(),
      });

      const validate = schema.safeParse(v);
      if (!validate.success) {
        throw new Error(validate.error.message);
      }
      return validate.data;
    })
    .mutation(async ({ input }) => {
      await dbConnect();
      const findBlog: TBlogViews | null = await blogViews.findOne({
        blogId: input.blogId,
      });

      if (findBlog) {
        const findUser = findBlog.viewsId.find((id) => id === input.viewsId);

        if (findUser) {
          return findBlog;
        }

        const { viewsId } = findBlog;
        const newViews = [...viewsId, input.viewsId];
        const updateViews: TBlogViews | null = await blogViews.findOneAndUpdate(
          { blogId: input.blogId },
          { viewsId: newViews },
          { new: true }
        );

        return updateViews;
      } else {
        const createBlog: TBlogViews = await blogViews.create({
          blogId: input.blogId,
          viewsId: [input.viewsId],
        });
        return createBlog;
      }
    }),
});

export type BlogRouter = typeof blogRouter;
