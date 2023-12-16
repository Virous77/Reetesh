"use server";

import axios from "axios";
import { z } from "zod";

const base_url = process.env.NEXT_PUBLIC_SERVER_URL;

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  message: z.string().min(10),
});

export const contactActions = async (formData: FormData) => {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const error = validatedFields.error.issues
      .map((issue) => issue.path)
      .flat();

    return {
      name: error.includes("name") ? "Please enter a valid Name" : "",
      email: error.includes("email") ? "Please enter a valid Email" : "",
      message: error.includes("message") ? "Please enter a valid Message" : "",
      status: "error",
    };
  }

  try {
    const { data } = await axios.post(
      `${base_url}/send-email`,
      validatedFields.data
    );

    if (data) {
      return {
        status: data.status ? "success" : "failed",
        name: "",
        email: "",
        message: "",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      name: "",
      email: "",
      message: "",
    };
  }
};
