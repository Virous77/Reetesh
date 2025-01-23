import React, { ReactNode } from 'react';
import { Linkedin, Facebook, MessageCircle } from 'lucide-react';
import BlogAction from './blog-action';
import { XIcon } from '@/utils/icons/x';
import { ToolTipComp } from '@/components/ui/tooltip';
import { BlogShareMotion } from '@/components/common/motion';

type TBlogAction = {
  title: string;
  url: string;
  blogId: string;
};

const BlogShare: React.FC<TBlogAction> = ({ title, url, blogId }) => {
  return (
    <BlogShareMotion>
      <BlogMain title={title} url={url} blogId={blogId} />
    </BlogShareMotion>
  );
};

export default BlogShare;

const BlogMain = ({ blogId, url, title }: TBlogAction) => {
  return (
    <div className="flex w-full items-center gap-2">
      <BlogAction blogId={blogId} />
      <div className="flex items-center gap-2">
        <A
          url={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          name="Facebook"
        >
          <Facebook />
        </A>

        <A
          url={`https://x.com/intent/tweet?url=${url}&text=${title}`}
          name="Twitter"
        >
          <XIcon className="h-[21px] w-[21px]" />
        </A>

        <A
          url={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&text=${title}`}
          name="Linkedin"
        >
          <Linkedin />
        </A>

        <A url={`https://wa.me/?text=${url}`} name="Whatsapp">
          <MessageCircle />
          <p className="absolute top-[15px] left-[13.5px] flex h-3 w-3 items-center justify-center text-[0.44rem]">
            W
          </p>
        </A>
      </div>
    </div>
  );
};

const A: React.FC<{ children: ReactNode; url: string; name: string }> = ({
  children,
  url,
  name,
}) => {
  return (
    <ToolTipComp name={name}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-primary-foreground hover:bg-primary/90 relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full"
        title={name}
        aria-label={name}
      >
        {children}
      </a>
    </ToolTipComp>
  );
};
