import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const createTransporter = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    return transporter;
  } catch (err) {
    throw false;
  }
};

export const sendEmail = async (email, message, userName) => {
  const currentModuleDir = path.dirname(new URL(import.meta.url).pathname);
  const otpTemplate = fs.readFileSync(
    path.join(currentModuleDir, "../", "template/mail.hbs"),
    "utf-8"
  );
  const template = Handlebars.compile(otpTemplate);

  let mailDetails = {
    from: process.env.EMAIL,
    to: process.env.SEND_TO,
    subject: "New Email | Reetesh",
    html: template({ email, message, userName }),
  };

  try {
    let emailTransporter = await createTransporter();
    const data = await emailTransporter.sendMail(mailDetails);
    if (data.accepted.length > 0) {
      console.log("Email sent successfully!");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw false;
  }
};
