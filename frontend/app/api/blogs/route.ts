import { getAllBlogPosts } from "@/lib/post";
import { NextResponse } from "next/server";

export async function GET() {
  const blogs = await getAllBlogPosts();
  const response = NextResponse.json({ status: true, blogs });

  return response;
}
