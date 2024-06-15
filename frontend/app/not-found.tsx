import notFound from '../public/404_image.png';
import { Home } from 'lucide-react';
import Image from 'next/image';
import { Root } from '@/routes';

export default function NotFound() {
  return (
    <main
      className="flex items-center justify-center"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={notFound.src} alt="404 image" width={350} height={350} />
        <p>Oops! This page is not found...</p>
        <Root.Link className="mt-4">
          <Home size={24} />
        </Root.Link>
      </div>
    </main>
  );
}
