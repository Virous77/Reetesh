'use client';

import { addUserIDToLocalStorage, getLocalData } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';
import { addViewsAction } from './action';

const Views = ({ slug }: { slug: string }) => {
  const { data } = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      const id: string = getLocalData('tempId');
      const tempId = addUserIDToLocalStorage(id);
      const views = addViewsAction({ blogId: slug, viewsId: id || tempId });
      return views;
    },
    enabled: slug ? true : false,
  });

  return (
    <span>
      {data
        ? `${data.toLocaleString('en-US')} ${data === 1 ? 'view' : 'views'}`
        : ''}
    </span>
  );
};

export default Views;
