import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import CommonTab from "../common/common-tab";
import { Locate } from "lucide-react";
import Author from "../common/author";

const Sidebar = () => {
  const Links = [
    {
      name: "My Blogs",
      path: "/blogs",
      icon: <Locate />,
    },
    {
      name: "Home",
      path: "/",
      icon: null,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: null,
    },
  ];
  return (
    <section className=" p-4 md:p-0 md:pt-12 ">
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
          <p>
            My Blog where i write about my journey as a Full-Stack developer. I
            love writing about my journey as a developer and sharing my
            knowledge with others.
          </p>
        </CardBody>
      </Card>
      <CommonTab links={Links} type={false} />
    </section>
  );
};

export default Sidebar;
