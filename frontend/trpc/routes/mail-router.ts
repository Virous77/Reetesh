import CommentEmail from '@/components/email/blogComment-mail';
import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const commentMail = async (comment: string, blogId: string) => {
  const data = await resend.emails.send({
    from: process.env.EMAIL!,
    to: process.env.SEND_TO!,
    subject: 'New  Blog Comment! 🥳',
    react: CommentEmail({ comment, blogId }),
  });

  if (!data.error) {
    return { status: true };
  } else {
    return { status: false };
  }
};
