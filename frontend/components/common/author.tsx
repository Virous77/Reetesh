import { Root } from '@/routes';
import AuthorImage from './author-image';

const Author = () => {
  return (
    <div className="flex gap-3">
      <Root.Link aria-label="home">
        <AuthorImage />
      </Root.Link>
      <div className="flex flex-col items-start justify-center gap-1">
        <span className="mobile350:text-sm text-base leading-none font-semibold whitespace-nowrap">
          Reetesh Kumar
        </span>
        <span className="text-default block text-xs tracking-tight">
          @iMBitcoinB
        </span>
      </div>
    </div>
  );
};

export default Author;
