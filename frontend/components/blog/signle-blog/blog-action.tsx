'use client';

import { Button } from '@/components/ui/button';
import { MessageSquareQuote, ThumbsUp } from 'lucide-react';
import { addBlogLikeAction, getLikeAction } from './action';
import { useMutation, useQuery } from '@tanstack/react-query';
import action from './comment/action';
import { getLocalData } from '@/utils/utils';
import { ToolTipComp } from '@/components/ui/tooltip';
import { startTransition, useOptimistic } from 'react';

const BlogAction = ({
  blogId,
  isMobile,
}: {
  blogId: string;
  isMobile: boolean;
}) => {
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
    onSuccess: () => {
      refetch();
      action(blogId);
    },
    onError: (error) => {
      alert(error.message || 'Failed to delete comment');
    },
  });

  const scrollToTarget = () => {
    const targetElement = document.querySelector('.comment-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLike = () => {
    const viewId = getLocalData('tempId');
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
    <div
      className={`${isMobile ? 'mb-0 pl-0' : 'mb-4 pl-2'} flex items-center gap-3`}
    >
      <ToolTipComp name="Like">
        <Button
          size="icon"
          onClick={handleLike}
          disabled={isPending}
          className="flex w-[60px] items-center gap-2"
        >
          <ThumbsUp size={20} />
          <span className="text-base">{optimisticLike}</span>
        </Button>
      </ToolTipComp>

      <ToolTipComp name="Comment">
        <Button onClick={scrollToTarget} size="icon">
          <MessageSquareQuote size={20} />
        </Button>
      </ToolTipComp>
    </div>
  );
};

export default BlogAction;
