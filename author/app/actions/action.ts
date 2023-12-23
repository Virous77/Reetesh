"use server";

import z from "zod";
import axios from "axios";
import { hashData } from "@/utils/utils";

const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

const ProjectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  desc: z.string().min(10, "Description must be at least 10 characters long"),
  codeLink: z.string().url("Code link must be a valid URL"),
  images: z.string().url("Image link must be a valid URL"),
  projectLink: z.string().url("Project link must be a valid URL"),
  develop: z.string().min(3, "Develop must be at least 3 characters long"),
  weight: z.string(),
  tags: z.string(),
});

export const createNewProject = async (formData: FormData) => {
  const hash = hashData();
  const data = Object.fromEntries(formData.entries());
  const project = ProjectSchema.safeParse(data);

  if (project.success) {
    const { tags, ...rest } = project.data;
    const createTags = tags.split(" ");
    const params = { tags: createTags, ...rest };

    const { data } = await axios.post(`${server_url}/projects`, params, {
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
