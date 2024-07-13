'use client';
import Image from 'next/image';
import ImageZoom from './image-zoom';

const CustomImage = ({ ...props }: any) => {
  return (
    <ImageZoom image={props.src} name={props.alt}>
      <Image
        {...props}
        width={0}
        alt="content picture"
        height={0}
        sizes="100vw"
        className="h-full w-full shadow-lg"
        priority={true}
        style={{ cursor: 'zoom-in' }}
      />
    </ImageZoom>
  );
};

export default CustomImage;
