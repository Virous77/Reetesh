'use client';

import { Button } from '@/components/ui/button';
import { MessageSquareQuote, ThumbsUp } from 'lucide-react';
import { addBlogLikeAction, getLikeAction } from './action';
import { useMutation, useQuery } from '@tanstack/react-query';
import { addUserIDToLocalStorage, getLocalData } from '@/utils/utils';
import { ToolTipComp } from '@/components/ui/tooltip';
import { startTransition, useOptimistic } from 'react';

const BlogAction = ({ blogId }: { blogId: string }) => {
  const { data, refetch } = useQuery({
    queryKey: [`like-${blogId}`],
    queryFn: async () => {
      try {
        const views = getLikeAction({ blogId });
        return views;
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
          return { totalLike: 0 };
        }
        alert('Failed to get likes');
        return { totalLike: 0 };
      }
    },
  });

  const [optimisticLike, setOptimisticLike] = useOptimistic(
    data?.totalLike || 0
  );

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

  const scrollToTarget = () => {
    const targetElement = document.querySelector('.comment-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLike = () => {
    const id: string = getLocalData('tempId');
    const viewId = id || addUserIDToLocalStorage(id);
    startTransition(() => {
      setOptimisticLike((prev) => prev + 1);
    });
    mutate({
      blogId,
      viewsId: viewId,
      like: 1,
    });
  };

  return (
    <div className="mb-0 flex items-center gap-2 pl-0">
      <ToolTipComp name="Like">
        <Button
          size="icon"
          onClick={handleLike}
          disabled={isPending}
          className="flex w-[60px] items-center gap-2 rounded-full"
          title="Like this post"
          aria-label="Like this post"
        >
          <ThumbsUp size={20} />
          <span className="text-base">{optimisticLike}</span>
        </Button>
      </ToolTipComp>

      <ToolTipComp name="Comment">
        <Button
          onClick={scrollToTarget}
          size="icon"
          title="Comment on this post"
          aria-label="Comment on this post"
          className="rounded-full"
        >
          <MessageSquareQuote size={20} />
        </Button>
      </ToolTipComp>
    </div>
  );
};

export default BlogAction;
