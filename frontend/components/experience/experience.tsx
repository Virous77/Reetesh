"use server";

import { Card, CardBody, CardHeader, Code, Image } from "@nextui-org/react";
import backgroundImage from "../../public/back2.webp";
import { ExternalLink } from "lucide-react";
import NextImage from "next/image";

const Experience = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "GraphQL",
    "Docker",
    "MongoDB",
    "Solidity",
    "Anchor",
  ];
  return (
    <div>
      <Card className="col-span-12 sm:col-span-4 h-[430px] md:h-[360px] bg-transparent shadow-none hover:bg-default-50 cursor-pointer">
        <CardBody className="z-[10] absolute ">
          <div className="flex items-start gap-5">
            <p className="text-tiny uppercase font-bold mt-[6px] whitespace-nowrap">
              Feb 2023 - Present
            </p>
            <div>
              <h2 className="font-medium text-large">
                Junior Software Engineer
              </h2>

              <a
                href="https://www.inaraconsultancy.com/"
                referrerPolicy="no-referrer"
                target="_blank"
              >
                <Code
                  color="default"
                  className=" bg-transparent text-tiny mt-0 ml-0 pl-0 flex items-center gap-2 text-default-600"
                >
                  Inara Consultancy Services <ExternalLink size={17} />
                </Code>
              </a>
            </div>
          </div>
          <p className=" text-[14px] mt-3 leading-[1.5] text-default-600 mb-4">
            I have been a valued member of Inara Consultancy Services,
            contributing significantly to the development of diverse projects.
            My role involves utilizing cutting-edge technologies and build
            highly scalable web apps. I have actively contributed to the
            creation of multiple decentralized applications (DApps) and web
            applications focusing on finance. Additionally, I&apos;ve played a
            key role in projects related to non-fungible tokens (NFTs) on both
            the Solana and Ethereum blockchains.
          </p>
          <div className=" mt-2 flex flex-wrap gap-2 ">
            {skills.map((tag) => (
              <span
                key={tag}
                className=" px-2 py-1 bg-default-50 text-[12px] rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardBody>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover dark:block hidden"
          src={backgroundImage.src}
          as={NextImage}
          height={100}
          width={100}
        />
      </Card>
    </div>
  );
};

export default Experience;
