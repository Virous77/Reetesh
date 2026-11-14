/* eslint-disable @next/next/no-img-element */
'use client';

import { ToolTipLink } from '@/components/ui/tooltip';
import React, { useState } from 'react';
import { useMediaQuery } from './media-query';
import { ArrowUpRight } from 'lucide-react';

type TDetails = {
  title: string | null;
  description: string | null;
  image: string | null;
  key: string;
};

const desktop = '(min-width: 768px)';

export const A = ({ children, ...props }: any) => {
  // Sanitized comments can leave anchors without an href.
  if (!props.href) return <span>{children}</span>;

  return <LinkWithPreview {...props}>{children}</LinkWithPreview>;
};

const LinkWithPreview = ({ children, ...props }: any) => {
  const isDesktop = useMediaQuery(desktop);
  const [open, setOpen] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState<TDetails[] | []>([]);

  const handleHover = async (href: string) => {
    setOpen(href);
    if (href.includes('mailto:')) return;
    try {
      const isCached =
        details.length > 0 && details.find((item) => item.key === href);
      if (isCached) return;
      setIsLoading(true);
      const res = await fetch(`/api/preview?url=${encodeURIComponent(href)}`, {
        cache: 'no-cache',
      });
      if (!res.ok) throw new Error('No preview available');
      const data = await res.json();
      const { title, description, image } = data;
      setDetails((prev) => [...prev, { title, description, image, key: href }]);
      setIsLoading(false);
    } catch {
      setDetails((prev) => [
        ...prev,
        { title: 'error', description: null, image: null, key: href },
      ]);
      setIsLoading(false);
    }
  };

  const currentLink = details.find((item) => item.key === open);
  const isShow = props.href[0] === '#';

  return (
    <React.Fragment>
      {isDesktop ? (
        <ToolTipLink
          name={
            <Content
              currentLink={currentLink}
              isLoading={isLoading}
              open={open}
            />
          }
          duration={isShow ? 10000000 : 100}
        >
          <a
            {...props}
            className="post-link"
            onClick={(e) => {
              if (props.href[0] === '#') {
                return scrollY > 0 && scroll(0, 0);
              }

              handleHover(props.href);
              e.preventDefault();
            }}
            onMouseEnter={(e) => {
              e.preventDefault();
              if (props.href[0] === '#') return;
              handleHover(props.href);
            }}
          >
            {children}
          </a>
        </ToolTipLink>
      ) : (
        <MobileA {...props}>{children}</MobileA>
      )}
    </React.Fragment>
  );
};

const Content = ({
  currentLink,
  isLoading,
  open,
}: {
  currentLink: TDetails | undefined;
  isLoading: boolean;
  open: string;
}) => {
  if (isLoading || !currentLink) {
    return <p className="link-preview-status">Loading preview...</p>;
  }

  if (currentLink.title === 'error') {
    return (
      <div>
        <p className="link-preview-status">No preview for this link.</p>
        <VisitLink href={open || '#'} />
      </div>
    );
  }

  return (
    <div>
      {currentLink.image && (
        <img
          src={currentLink.image}
          alt=""
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          className="link-preview-image"
        />
      )}
      <p className="link-preview-title">{currentLink.title}</p>
      {currentLink.description && (
        <p className="link-preview-text">{currentLink.description}</p>
      )}
      <VisitLink href={currentLink.key || '#'} />
    </div>
  );
};

const MobileA = ({ children, ...props }: any) => {
  return (
    <a
      {...props}
      className="post-link"
      title="content link"
      aria-label="visit link"
    >
      {children}
    </a>
  );
};

const VisitLink = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-preview-visit"
    >
      Visit to read more <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
};
