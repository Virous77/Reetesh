import { Root } from '@/routes';
import AuthorImage from './author-image';

const Author = () => {
  return (
    <div className="flex gap-5">
      <Root.Link aria-label="home">
        <AuthorImage />
      </Root.Link>
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
