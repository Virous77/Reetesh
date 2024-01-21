"use server";

import { hashData, localAppError } from "@/utils/utils";

type GetProps = {
  endpoint?: string;
  tag: string;
  url?: string;
};

export const runtime = "edge";

const base_url = process.env.NEXT_PUBLIC_SERVER_URL;

export const getServerData = async ({ endpoint, tag, url }: GetProps) => {
  const hashKey = hashData();
  const res = await fetch(url ? url : `${base_url}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${hashKey}`,
    },
    next: { tags: [tag] },
  });

  const data = await res.json();
  if (typeof data.status !== "boolean") {
    return (
      { data: null, message: data.message, status: false } || localAppError.data
    );
  }
  return data;
};
