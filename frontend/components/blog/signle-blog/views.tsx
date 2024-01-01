"use client";

import { formateDate, getLocalData, hashData } from "@/utils/utils";
import { CalendarDays, Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Views = ({ date, slug }: { date: string; slug: string }) => {
  const [views, setViews] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = getLocalData("tempId");
        const hashKey = hashData();
        const res = await axios.post(
          `${baseUrl}/views`,
          { blogId: slug, newView: id },
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
