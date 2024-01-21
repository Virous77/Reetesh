import Email from "@/components/email/email";
import { NextRequest } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";
const resend = new Resend(process.env.RESEND_API_KEY);

type TBody = {
  email: string;
  message: string;
  userName: string;
};

export async function POST(request: NextRequest) {
  try {
    const { email, message, userName }: TBody = await request.json();
    console.log(email, message, userName);
    const data = await resend.emails.send({
      from: process.env.EMAIL!,
      to: process.env.SEND_TO!,
      subject: "New Query Mail! 📬",
      react: Email({ username: userName, message, email }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
}
