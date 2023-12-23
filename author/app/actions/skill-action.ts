"use server";

import z from "zod";
import axios from "axios";
import { hashData } from "@/utils/utils";

const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

const ProjectSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  about: z.string().min(10, "about must be at least 10 characters long"),
  images: z.string().url("Image link must be a valid URL"),
  level: z.string(),
});

export const createSkill = async (formData: FormData) => {
  const hash = hashData();
  const data = Object.fromEntries(formData.entries());
  const project = ProjectSchema.safeParse(data);

  if (project.success) {
    const { images, ...rest } = project.data;
    const params = { icon: images, ...rest };

    const { data } = await axios.post(`${server_url}/skills`, params, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${hash}`,
      },
    });

    return data;
  } else {
    throw new Error(project.error.message);
  }
};
