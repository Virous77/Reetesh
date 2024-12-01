'use client';

import { TBlog } from '@/models/blog-comments';
import dynamic from 'next/dynamic';
import React from 'react';

const CommentList = dynamic(() => import('./comment-list'), { ssr: false });

const CommentProvider = ({ data }: { data: TBlog[] }) => {
  return <CommentList data={data} />;
};

export default CommentProvider;
