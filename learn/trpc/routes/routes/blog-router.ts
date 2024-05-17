import dbConnect from "@/db/mongoose";
import { publicProcedure, router } from "..";
import z from "zod";
import blogComments, { TBlog } from "@/models/blog-comments";
import blogViews, { TBlogViews } from "@/models/blog-views";
import { commentMail } from "./mail-router";

export const blogRouter = router({
  getComments: publicProcedure
    .input((v) => {
      const schema = z.object({
        id: z.string(),
      });

      const validate = schema.safeParse(v);

      if (!validate.success) {
        throw new Error(validate.error.message);
      }

      return validate.data;
    })
    .query(async ({ input }) => {
      await dbConnect();
      const comments: TBlog[] = await blogComments
        .find({ blogId: input.id })
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
      commentMail(input.comment, input.blogId);
      return comment;
    }),
  addViews: publicProcedure
    .input((v) => {
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
          return findBlog.viewsId.length;
        }

        const { viewsId } = findBlog;
        const newViews = [...viewsId, input.viewsId];
        const updateViews: TBlogViews | null = await blogViews.findOneAndUpdate(
          { blogId: input.blogId },
          { viewsId: newViews },
          { new: true }
        );

        return updateViews?.viewsId?.length;
      } else {
        const createBlog: TBlogViews = await blogViews.create({
          blogId: input.blogId,
          viewsId: [input.viewsId],
        });
        return createBlog.viewsId.length;
      }
    }),
  addLike: publicProcedure
    .input((v) => {
      const schema = z.object({
        commentId: z.string(),
        userId: z.string(),
        type: z.enum(["like", "dislike"]),
      });

      const validate = schema.safeParse(v);
      if (!validate.success) {
        throw new Error(validate.error.message);
      }
      return validate.data;
    })
    .mutation(async ({ input }) => {
      await dbConnect();
      const findComment: TBlog | null = await blogComments.findById(
        input.commentId
      );
      if (!findComment) {
        throw new Error("Comment not found");
      }
      const findLikeUser = findComment.like.find((id) => id === input.userId);
      const findDislikeUser = findComment.dislike.find(
        (id) => id === input.userId
      );
      if (findLikeUser || findDislikeUser) {
        await blogComments.findByIdAndUpdate(input.commentId, {
          [input.type === "like" ? "dislike" : "like"]: findComment[
            input.type as "like" | "dislike"
          ].filter((id) => id !== input.userId),
        });
      }

      if (input.type === "like" && findLikeUser) {
        await blogComments.findByIdAndUpdate(input.commentId, {
          like: findComment.like.filter((id) => id !== input.userId),
        });

        return {
          message: "Liked removed successfully",
        };
      }

      if (input.type === "dislike" && findDislikeUser) {
        await blogComments.findByIdAndUpdate(input.commentId, {
          dislike: findComment.dislike.filter((id) => id !== input.userId),
        });

        return {
          message: "Disliked removed successfully",
        };
      }

      await blogComments.findByIdAndUpdate(input.commentId, {
        [input.type]: [
          ...findComment[input.type as "like" | "dislike"],
          input.userId,
        ],
      });
      return {
        message: `${input.type}d successfully`,
      };
    }),
  deleteComment: publicProcedure
    .input((v) => {
      const schema = z.object({
        commentId: z.string(),
        userId: z.string(),
      });

      const validate = schema.safeParse(v);
      if (!validate.success) {
        throw new Error(validate.error.message);
      }
      return validate.data;
    })
    .mutation(async ({ input }) => {
      await dbConnect();
      const findComment: TBlog | null = await blogComments.findById(
        input.commentId
      );
      if (!findComment) {
        throw new Error("Comment not found");
      }
      if (findComment.userId !== input.userId) {
        throw new Error("You are not authorized to delete this comment");
      }
      await blogComments.findByIdAndDelete(input.commentId);
      return {
        message: "Comment deleted successfully",
      };
    }),
});

export type BlogRouter = typeof blogRouter;
