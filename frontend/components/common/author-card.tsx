import Author from './author';
import { Card, CardContent, CardHeader } from '../ui/card';
import MainCard from '../ui/card-border';
import ButtonGradient from '../ui/gradiant-button';

type TMessage = {
  message: string;
};

const AuthorCard: React.FC<TMessage> = ({ message }) => {
  return (
    <MainCard>
      <Card className="border border-none bg-transparent from-[#111111] to-[#1f1f1f] p-2 px-0 pb-3 shadow-none dark:md:bg-linear-to-r lg:max-w-[440px]">
        <CardHeader className="justify-between p-3">
          <div className="flex items-center justify-between">
            <Author />

            <ButtonGradient
              className="w-[80px] rounded-[30px] text-[0.813rem]"
              aria-label="Follow on Twitter"
              title="Reetesh Kumar"
            >
              <a
                href="https://twitter.com/imbitcoinb"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer noopener"
              >
                Follow
              </a>
            </ButtonGradient>
          </div>
        </CardHeader>
        <CardContent className="mt-2 px-3 py-0 text-[0.813rem] text-default">
          <p>{message}</p>
        </CardContent>
      </Card>
    </MainCard>
  );
};

export default AuthorCard;
