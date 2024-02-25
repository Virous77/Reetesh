import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Author = () => {
  return (
    <div className="flex gap-5">
      <Link href="/" aria-label="home">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/101452588?v=4"
            alt="Reetesh Kumar"
          />
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-col items-start justify-center gap-1">
        <span className="text-[16px] font-semibold leading-none">
          Reetesh Kumar
        </span>
        <span className="block text-[13px] tracking-tight text-default">
          @iMBitcoinB
        </span>
      </div>
    </div>
  );
};

export default Author;
