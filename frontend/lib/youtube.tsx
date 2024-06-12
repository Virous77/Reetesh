import React from 'react';

const Youtube = ({ link }: { link: string }) => {
  return (
    <iframe
      width="100%"
      height="315"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      suppressHydrationWarning
    ></iframe>
  );
};

export default Youtube;
