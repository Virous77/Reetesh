import notFound from '../public/404_image.png';
import { Home } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

const NotFound = () => {
  return (
    <main
      className="flex items-center justify-center"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={notFound.src} alt="404 image" width={350} height={350} />
        <p>Oops! This page is not found...</p>
        <Link href="/" className="mt-4">
          <Home size={24} />
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
