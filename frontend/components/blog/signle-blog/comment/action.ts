"use server";

import { revalidatePath } from "next/cache";

export default async function action(path: string) {
  revalidatePath(`/blog${path}`);
}
