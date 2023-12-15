import { sendEmail } from "../utils/sendEmail.js";

export const sendAutoMatedEmail = async (req, res, next) => {
  const { userName, message, email } = req.body;

  try {
    const status = await sendEmail(email, message, userName);
    if (status) {
      res.status(200).json({ message: "Email sent!", status: true });
    } else {
      res.status(400).json({ message: "Email not sent!", status: false });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
