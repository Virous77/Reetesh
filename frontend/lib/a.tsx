/* eslint-disable @next/next/no-img-element */
'use client';

import { ToolTipLink } from '@/components/ui/tooltip';
import React, { useState } from 'react';
import { useMediaQuery } from './media-query';

type TDetails = {
  title: string | null;
  description: string | null;
  image: string | null;
  key: string;
};

const desktop = '(min-width: 768px)';

export const A = ({ children, ...props }: any) => {
  const isDesktop = useMediaQuery(desktop);
  const [open, setOpen] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState<TDetails[] | []>([]);

  const handleHover = async (href: string) => {
    setOpen(href);
    if (href.includes('mailto:')) return;
    if (href[0] === '#') return;

    try {
      const isCached =
        details.length > 0 && details.find((item) => item.key === href);
      if (isCached) return;
      setIsLoading(true);
      const res = await fetch('/api/preview?url=' + href, {
        cache: 'no-cache',
      });
      const data = await res.json();
      const { title, description, image } = data;
      setDetails((prev) => [...prev, { title, description, image, key: href }]);
      setIsLoading(false);
    } catch (error) {
      setDetails((prev) => [
        ...prev,
        { title: 'error', description: null, image: null, key: href },
      ]);
      console.error(error);
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
            className="font-medium underline underline-offset-4"
            onClick={(e) => {
              e.preventDefault();
            }}
            onMouseEnter={(e) => {
              e.preventDefault();
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
  return (
    <div className="h-full w-full">
      {isLoading ? (
        <p className="m-0 w-full p-0 text-center text-foreground">Loading...</p>
      ) : (
        <React.Fragment>
          {currentLink?.title === 'error' ? (
            <div>
              <p
                className="m-0 w-full p-0 text-center"
                style={{
                  fontSize: '0.75rem',
                  color: 'red',
                }}
              >
                opps! no content found
              </p>
              <VisitLink href={open || '#'} />
            </div>
          ) : (
            <div>
              <h3 className="mb-1 mt-0 text-base font-semibold">
                {currentLink?.title}
              </h3>
              <p
                className="text-default"
                style={{
                  fontSize: '0.75rem',
                }}
              >
                {currentLink?.description}
              </p>
              {currentLink?.image && (
                <img
                  src={currentLink.image}
                  alt={currentLink.title || ''}
                  title={currentLink.title || ''}
                  aria-label={currentLink.title || ''}
                  onError={(e) => {
                    e.currentTarget.src = '/favicon.ico';
                  }}
                  className="mt-3 h-32 w-full object-cover shadow"
                  style={{
                    borderRadius: '0.5rem',
                    height: '8rem',
                  }}
                />
              )}
              {currentLink && <VisitLink href={currentLink?.key || '#'} />}
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

const MobileA = ({ children, ...props }: any) => {
  return (
    <a
      {...props}
      className="font-medium underline underline-offset-4"
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
      className="mt-2 flex items-center justify-center font-medium text-foreground underline underline-offset-4"
      title="content link"
      aria-label="visit link"
    >
      Visit to learn more
    </a>
  );
};
