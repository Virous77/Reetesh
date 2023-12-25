import { Avatar } from "@nextui-org/react";
import Link from "next/link";

const Author = () => {
  return (
    <div className="flex gap-5">
      <Link href="/">
        <Avatar
          isBordered
          radius="full"
          size="md"
          src="https://avatars.githubusercontent.com/u/101452588?v=4"
        />
      </Link>
      <div className="flex flex-col gap-1 items-start justify-center">
        <h4 className="text-small font-semibold leading-none text-default-600">
          Reetesh Kumar
        </h4>
        <h5 className="text-tiny tracking-tight text-default-400">
          @iMBitcoinB
        </h5>
      </div>
    </div>
  );
};

export default Author;
