'use client';

import { PhraseButton, PhraseLink } from '@/components/home/phrase';
import { addUserIDToLocalStorage, getLocalData } from '@/utils/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { startTransition, useOptimistic } from 'react';
import { addBlogLikeAction, getLikeAction } from './action';

type TBlogShare = {
  title: string;
  url: string;
  blogId: string;
};

const BlogShare: React.FC<TBlogShare> = ({ title, url, blogId }) => {
  const { data, refetch } = useQuery({
    queryKey: [`like-${blogId}`],
    queryFn: () => getLikeAction({ blogId }),
  });

  const [likes, addLike] = useOptimistic(data?.totalLike || 0);

  const { mutate, isPending } = useMutation({
    mutationFn: addBlogLikeAction,
    onSuccess: (result) => {
      if ('error' in result) alert(result.error);
      refetch();
    },
    onError: (error) => {
      alert(error.message || 'Failed to like');
    },
  });

  const handleLike = () => {
    if (isPending) return;

    const id: string = getLocalData('tempId');
    const viewId = id || addUserIDToLocalStorage(id);

    startTransition(() => addLike((count) => count + 1));
    mutate({ blogId, viewsId: viewId, like: 1 });
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <p className="post-closing mt-14 border-t pt-8">
      Found this useful? <PhraseButton text="Like it" onClick={handleLike} />
      {likes > 0 && <span className="home-soft"> ({likes})</span>}, or share it
      on{' '}
      <PhraseLink
        text="X"
        href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
      />
      ,{' '}
      <PhraseLink
        text="LinkedIn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
      />{' '}
      and{' '}
      <PhraseLink text="WhatsApp" href={`https://wa.me/?text=${encodedUrl}`} />.
    </p>
  );
};

export default BlogShare;
