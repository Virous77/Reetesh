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
      preload="none"
      aria-details="Video of the author"
      aria-label="video"
    />
  );
};
