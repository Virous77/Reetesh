'use client';
import Image from 'next/image';
import ImageZoom from './image-zoom';

const CustomImage = ({ children, ...props }: any) => {
  return (
    <ImageZoom image={props.src} name={props.alt}>
      <Image
        {...props}
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full rounded-lg  shadow-lg"
        priority={true}
        style={{ cursor: 'zoom-in' }}
      />
    </ImageZoom>
  );
};

export default CustomImage;
