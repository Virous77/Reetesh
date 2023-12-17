import { getBlog } from "@/lib/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const id = path.split("/")[3];

  const blog = await getBlog(id);
  const response = NextResponse.json({ status: true, blog });

  return response;
}
