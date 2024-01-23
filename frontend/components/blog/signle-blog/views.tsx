"use client";

import {
  formateDate,
  generateUUID,
  getLocalData,
  hashData,
} from "@/utils/utils";
import { CalendarDays, Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import { trpc } from "@/trpc-client/client";

const Views = ({ date, slug }: { date: string; slug: string }) => {
  const [views, setViews] = useState(0);
  const { mutateAsync } = trpc.blogs.addViews.useMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id: string = getLocalData("tempId");
        let tempId: string = "";
        if (!id) {
          tempId = generateUUID();
          localStorage.setItem("tempId", JSON.stringify(tempId.toString()));
        }
        // const hashKey = hashData();
        const blog =
          (await mutateAsync({ blogId: slug, viewsId: id || tempId })) || 0;
        setViews(blog);
      } catch (error) {}
    };
    fetchData();
  }, [slug, mutateAsync]);

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
