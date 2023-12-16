"use server";

import { hashData, localAppError } from "@/utils/utils";

type GetProps = {
  endpoint: string;
  tag: string;
};

const base_url = process.env.NEXT_PUBLIC_SERVER_URL;

export const getServerData = async ({ endpoint, tag }: GetProps) => {
  const hashKey = hashData();
  const res = await fetch(`${base_url}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${hashKey}`,
    },
    next: { tags: [tag] },
    cache: "no-cache",
  });

  const data = await res.json();
  if (typeof data.status !== "boolean") {
    return (
      { data: null, message: data.message, status: false } || localAppError.data
    );
  }
  return data;
};
