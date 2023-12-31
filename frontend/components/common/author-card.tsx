import Author from "./author";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

type TMessage = {
  message: string;
};

const AuthorCard: React.FC<TMessage> = ({ message }) => {
  return (
    <Card className="max-w-[440px] p-2 pb-3 bg-transparent border mb-6 md:mb-0">
      <CardHeader className="justify-between p-3">
        <div className=" flex items-center justify-between">
          <Author />

          <Button className="w-[80px] text-[13px] rounded-[30px]">
            <a
              href="https://twitter.com/imbitcoinb"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-3 py-0 text-[13px] text-default mt-2">
        <p>{message}</p>
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
