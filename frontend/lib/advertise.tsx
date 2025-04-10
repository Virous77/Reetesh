import React from 'react';
import { allPosts } from '@/.contentlayer/generated';
import { BlogDetails } from '@/routes';
import { AdvertiseParent } from '@/components/common/motion';

type TAdvertise = {
  title: string;
};

const Advertise: React.FC<TAdvertise> = ({ title }) => {
  const post = allPosts.find(
    (post) => post.title.toLowerCase() === title.toLowerCase()
  );

  if (!post) return null;
  const { about, blogImage, slugAsParams } = post;

  return (
    <AdvertiseParent>
      <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row md:items-end">
        <div>
          <h1 className="text-center text-xl capitalize">{title}</h1>
          <p className="text-center text-[0.875rem] whitespace-normal">
            {about}
          </p>
          <BlogDetails.Link
            className="inline-block w-full text-center"
            id={slugAsParams}
            aria-label={`Read full post ${title}`}
          >
            Read Full Post
          </BlogDetails.Link>
        </div>
        <img
          width={300}
          height={200}
          alt={title}
          src={blogImage}
          className="!mt-[5px] !mb-[10px] flex items-end justify-end rounded-lg"
          style={{ marginTop: '5px', marginBottom: '10px' }}
        />
      </div>
    </AdvertiseParent>
  );
};

export default Advertise;
