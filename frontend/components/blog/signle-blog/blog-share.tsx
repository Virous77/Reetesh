'use client';

import { addUserIDToLocalStorage, getLocalData } from '@/utils/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ArrowUpRight, Check, Heart } from 'lucide-react';
import { startTransition, useOptimistic, useState } from 'react';
import { addBlogLikeAction, getLikeAction } from './action';

type TBlogShare = {
  title: string;
  url: string;
  blogId: string;
};

const BlogShare: React.FC<TBlogShare> = ({ title, url, blogId }) => {
  const [copied, setCopied] = useState(false);
  const [justLiked, setJustLiked] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: [`like-${blogId}`],
    queryFn: () =>
      getLikeAction({ blogId, viewsId: getLocalData('tempId') || undefined }),
  });

  const [likes, addLike] = useOptimistic(data?.totalLike || 0);
  const liked = justLiked || Boolean(data?.liked);

  const { mutate, isPending } = useMutation({
    mutationFn: addBlogLikeAction,
    onSuccess: (result) => {
      if ('error' in result) {
        setJustLiked(false);
        alert(result.error);
      }
      refetch();
    },
    onError: (error) => {
      setJustLiked(false);
      alert(error.message || 'Failed to like');
    },
  });

  // One like per visitor, so a liked post stays liked and ignores more clicks.
  const handleLike = () => {
    if (isPending || liked) return;

    const id: string = getLocalData('tempId');
    const viewId = id || addUserIDToLocalStorage(id);

    setJustLiked(true);
    startTransition(() => addLike((count) => count + 1));
    mutate({ blogId, viewsId: viewId, like: 1 });
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shares = [
    {
      label: 'Share on X',
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  return (
    <section className="post-after mt-14">
      <h2 className="post-after-label">Thanks for reading</h2>
      <div className="post-after-actions">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="btn-ghost"
            onClick={handleLike}
            data-active={liked}
            aria-pressed={liked}
            aria-label={`${liked ? 'Liked' : 'Like this post'}${likes > 0 ? `, ${likes} likes` : ''}`}
          >
            <Heart
              size={14}
              aria-hidden="true"
              fill={liked ? 'currentColor' : 'none'}
            />
            {liked ? 'Liked' : 'Like'}
            {likes > 0 && (
              <span className="home-faint font-mono text-xs tabular-nums">
                {likes}
              </span>
            )}
          </button>
          <button type="button" className="btn-ghost" onClick={copyLink}>
            {copied && <Check size={14} aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy link'}
          </button>
        </div>
        <nav aria-label="Share" className="share-links">
          {shares.map((share) => (
            <a
              key={share.label}
              href={share.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {share.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default BlogShare;
