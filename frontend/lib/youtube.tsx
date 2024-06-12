const Youtube = ({ link }: { link: string }) => {
  return (
    <iframe
      width="100%"
      height="310"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      suppressHydrationWarning
      loading="lazy"
      aria-label="YouTube video player"
    ></iframe>
  );
};

export default Youtube;
