export const Video = ({ src }: { src: string }) => {
  return (
    <video
      className="mt-8 h-[300px] w-full md:mt-12 md:h-[400px]"
      autoPlay
      loop
      muted
      playsInline
      src={src}
      controls
      lang="en"
      suppressContentEditableWarning
      title="video"
      preload="none"
      aria-details="blog video"
      aria-label="video"
    />
  );
};
