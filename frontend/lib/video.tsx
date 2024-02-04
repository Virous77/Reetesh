export const Video = ({ src }: { src: string }) => {
  return (
    <video
      className="w-full h-[300px] md:h-[400px] mt-8 md:mt-12"
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
