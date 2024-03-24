'use client';

import { generateUUID, getLocalData } from '@/utils/utils';
import { Eye } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { trpc } from '@/trpc-client/client';

const Views = ({ slug }: { slug: string }) => {
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
    <p className=" text-small flex  items-center justify-center gap-2 text-[14px] text-default md:text-base">
      <Eye size={20} /> {views || 0}
    </p>
  );
};

export default Views;
