'use client';

import { generateUUID, getLocalData } from '@/utils/utils';
import { Eye } from 'lucide-react';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { addViewsAction } from './action';

const Views = ({ slug }: { slug: string }) => {
  const { data } = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      const id: string = getLocalData('tempId');
      let tempId: string = '';
      if (!id) {
        tempId = generateUUID();
        localStorage.setItem('tempId', JSON.stringify(tempId.toString()));
      }
      const views = addViewsAction({ blogId: slug, viewsId: id || tempId });
      return views;
    },
    enabled: slug ? true : false,
  });

  return (
    <p className=" text-small flex  items-center justify-center gap-2 text-[14px] text-default md:text-base">
      <Eye size={20} /> {data || 0}
    </p>
  );
};

export default Views;
