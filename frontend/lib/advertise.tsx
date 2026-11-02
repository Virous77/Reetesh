import React from 'react';
import { allPosts } from '@/.contentlayer/generated';
import { Link } from 'next-view-transitions';

type TAdvertise = {
  title: string;
};

const Advertise: React.FC<TAdvertise> = ({ title }) => {
  const post = allPosts.find(
    (post) => post.title.toLowerCase() === title.toLowerCase()
  );

  if (!post) return null;
  const { about, blogImage, slugAsParams, title: postTitle } = post;

  return (
    <Link
      href={`/blog/${slugAsParams}`}
      className="post-advertise not-prose"
      id={slugAsParams}
      aria-label={`Read full post ${postTitle}`}
    >
      <p className="post-advertise-title">{postTitle}</p>
      <p className="post-advertise-about">{about}</p>
      <img
        width={1200}
        height={630}
        alt={postTitle}
        src={blogImage}
        loading="lazy"
      />
      <span className="post-advertise-cta">Read Full Post</span>
    </Link>
  );
};

export default Advertise;
