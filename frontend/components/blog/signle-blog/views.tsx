'use client';

import { formateDate, generateUUID, getLocalData } from '@/utils/utils';
import { CalendarDays, Eye } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { trpc } from '@/trpc-client/client';

const Views = ({ date, slug }: { date: string; slug: string }) => {
  const [views, setViews] = useState(0);
  const { mutateAsync } = trpc.blogs.addViews.useMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id: string = getLocalData('tempId');
        let tempId: string = '';
        if (!id) {
          tempId = generateUUID();
          localStorage.setItem('tempId', JSON.stringify(tempId.toString()));
        }
        const blog =
          (await mutateAsync({ blogId: slug, viewsId: id || tempId })) || 0;
        setViews(blog);
      } catch (error) {}
    };
    fetchData();
  }, [slug, mutateAsync]);

  return (
    <div className=" mt-[12px] flex items-center justify-center gap-4">
      <p className=" text-small flex items-center justify-center gap-2 text-default">
        <CalendarDays size={20} /> {formateDate(date)}
      </p>
      <p className=" text-small flex  items-center justify-center gap-2 text-default">
        <Eye size={20} /> {views || 0}
      </p>
    </div>
  );
};

export default Views;
