import Author from './author';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';

type TMessage = {
  message: string;
};

const AuthorCard: React.FC<TMessage> = ({ message }) => {
  return (
    <Card className="mb-6 max-w-[440px] border bg-transparent from-[#1A1D23] to-[#25272D] p-2 pb-3 dark:border-none  md:mb-0 dark:md:bg-gradient-to-r">
      <CardHeader className="justify-between p-3">
        <div className=" flex items-center justify-between">
          <Author />

          <Button className="w-[80px] rounded-[30px] text-[13px]">
            <a
              href="https://twitter.com/imbitcoinb"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noreferrer noopener"
            >
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="mt-2 px-3 py-0 text-[13px] text-default">
        <p>{message}</p>
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
