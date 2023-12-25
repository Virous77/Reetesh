import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Author from "./author";

type TMessage = {
  message: string;
};

const AuthorCard: React.FC<TMessage> = ({ message }) => {
  return (
    <Card className="max-w-[440px] p-2 pb-3 bg-transparent border mb-6 md:mb-0">
      <CardHeader className="justify-between">
        <Author />

        <Button
          className="text-foreground border-default-200"
          color="success"
          radius="full"
          size="sm"
          variant="solid"
        >
          <a
            href="https://twitter.com/imbitcoinb"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Follow
          </a>
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{message}</p>
      </CardBody>
    </Card>
  );
};

export default AuthorCard;
