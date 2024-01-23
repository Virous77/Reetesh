import CommentEmail from "@/components/email/blogComment-mail";
import { publicProcedure, router } from "..";
import Email from "@/components/email/email";
import { Resend } from "resend";
import { z } from "zod";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const mailRouter = router({
  sendContactMail: publicProcedure
    .input((v) => {
      const schema = z.object({
        email: z.string(),
        message: z.string(),
        userName: z.string(),
      });

      const validate = schema.safeParse(v);
      if (!validate.success) {
        throw new Error(validate.error.message);
      }
      return validate.data;
    })
    .mutation(async ({ input }) => {
      const { userName, message, email } = input;
      const data = await resend.emails.send({
        from: process.env.EMAIL!,
        to: process.env.SEND_TO!,
        subject: "New Query Mail! 📬",
        react: Email({ username: userName, message, email }),
      });

      if (!data.error) {
        return { status: true };
      } else {
        return { status: false };
      }
    }),
});

export const commentMail = async (comment: string, blogId: string) => {
  const data = await resend.emails.send({
    from: process.env.EMAIL!,
    to: process.env.SEND_TO!,
    subject: "New  Blog Comment! 🥳",
    react: CommentEmail({ comment, blogId }),
  });

  if (!data.error) {
    return { status: true };
  } else {
    return { status: false };
  }
};

export type MailRouter = typeof mailRouter;
