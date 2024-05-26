'use client';

import { Button } from '@/components/ui/button';
import { ThumbsUp } from 'lucide-react';
import { addBlogLikeAction, getLikeAction } from './action';
import { useMutation, useQuery } from '@tanstack/react-query';
import action from './comment/action';
import { getLocalData } from '@/utils/utils';

const BlogAction = ({ blogId }: { blogId: string }) => {
  const { data, refetch } = useQuery({
    queryKey: [`like-${blogId}`],
    queryFn: async () => {
      try {
        const views = getLikeAction({ blogId });
        return views;
      } catch (error: any) {
        alert(error.message || 'Failed to get like');
      }
    },
  });

  const { mutate, isPending, variables } = useMutation({
    mutationFn: addBlogLikeAction,
    onSuccess: () => {
      refetch();
      action(blogId);
    },
    onError: (data: any) => {
      alert(data.message || 'Failed to delete comment');
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
    mutate({ blogId, viewsId: viewId, like: data?.totalLike || 0 });
  };

  return (
    <div className="mb-4 flex items-center gap-3 pl-2">
      <Button
        size="icon"
        onClick={handleLike}
        disabled={isPending}
        className=" flex w-[60px] items-center gap-1"
      >
        <ThumbsUp size={20} />
        <span className=" text-base">
          {isPending
            ? data && data?.totalLike + variables.like
            : data?.totalLike || 0}
        </span>
      </Button>
      <Button onClick={scrollToTarget}>Comment</Button>
    </div>
  );
};

export default BlogAction;
