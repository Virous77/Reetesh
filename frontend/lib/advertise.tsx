import Image from 'next/image';
import React from 'react';
import { allPosts } from '@/.contentlayer/generated';
import { notFound } from 'next/navigation';
import { BlogDetails } from '@/routes';

type TAdvertise = {
  title: string;
};

const Advertise: React.FC<TAdvertise> = ({ title }) => {
  const post = allPosts.find(
    (post) => post.title.toLowerCase() === title.toLowerCase()
  );

  if (!post) {
    return notFound();
  }
  const { about, blogImage, slugAsParams } = post;

  return (
    <div
      className="mt-2 flex w-full  items-center rounded border p-2"
      style={{ justifyContent: 'end' }}
    >
      <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row  md:items-end">
        <div>
          <h1 className=" text-center text-xl capitalize">{title}</h1>
          <p className="whitespace-normal text-center text-[14px]">{about}</p>
          <BlogDetails.Link
            className=" inline-block w-full text-center"
            id={slugAsParams}
            aria-label={`Read full post ${title}`}
          >
            Read Full Post
          </BlogDetails.Link>
        </div>
        <Image
          width={300}
          height={200}
          alt={title}
          src={blogImage}
          className=" !mb-[10px] !mt-[5px] flex items-end justify-end rounded-lg"
          style={{ marginTop: '5px', marginBottom: '10px' }}
        />
      </div>
    </div>
  );
};

export default Advertise;
