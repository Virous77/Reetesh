const Youtube = ({ id, name }: { id: string; name: string }) => {
  return (
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={name}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      suppressHydrationWarning
      loading="lazy"
      aria-label="YouTube video player"
    ></iframe>
  );
};

export default Youtube;
