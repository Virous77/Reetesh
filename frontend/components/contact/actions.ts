"use server";

import axios from "axios";
import { z } from "zod";
import { hashData } from "@/utils/utils";

const base_url = process.env.NEXT_PUBLIC_SERVER_URL;

const schema = z.object({
  email: z.string().email(),
  userName: z.string().min(2),
  message: z.string().min(10),
});

export const contactActions = async (formData: FormData) => {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    userName: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const error = validatedFields.error.issues
      .map((issue) => issue.path)
      .flat();

    return {
      name: error.includes("userName") ? "Please enter a valid Name" : "",
      email: error.includes("email") ? "Please enter a valid Email" : "",
      message: error.includes("message") ? "Please enter a valid Message" : "",
      status: "error",
    };
  }

  try {
    const hashKey = hashData();
    const { data } = await axios.post(
      `${base_url}/send-email`,
      validatedFields.data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hashKey}`,
        },
      }
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
    console.log(error);
    return {
      status: "failed",
      name: "",
      email: "",
      message: "",
    };
  }
};
