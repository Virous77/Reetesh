"use client";

import {
  formateDate,
  generateUUID,
  getLocalData,
  hashData,
} from "@/utils/utils";
import { CalendarDays, Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { trpc } from "@/trpc-client/client";

export const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Views = ({ date, slug }: { date: string; slug: string }) => {
  const [views, setViews] = useState(0);
  const { data } = trpc.createUser.useMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id: string = getLocalData("tempId");
        let tempId: string = "";
        if (!id) {
          tempId = generateUUID();
          localStorage.setItem("tempId", JSON.stringify(tempId.toString()));
        }
        const hashKey = hashData();
        // const blog = await mutateAsync({ blogId: slug, viewsId: id || tempId });
        // console.log(blog);
        const res = await axios.post(
          `${baseUrl}/views`,
          { blogId: slug, newView: id || tempId },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${hashKey}`,
            },
          }
        );
        setViews(res.data.data);
      } catch (error) {}
    };
    fetchData();
  }, [slug]);

  return (
    <div className=" flex items-center gap-4 mt-[12px] justify-center">
      <p className=" text-small text-default flex items-center justify-center gap-2">
        <CalendarDays size={20} /> {formateDate(date)}
      </p>
      <p className=" text-small text-default  flex items-center justify-center gap-2">
        <Eye size={20} /> {views || 0}
      </p>
    </div>
  );
};

export default Views;
