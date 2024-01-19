"use server";

import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";

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
    <Card className="shadow dark:bg-gradient-to-r from-[#0f1821] to-[#000000] bg-transparent cursor-pointer rounded-[10px] md:mx-1 mockup-window border dark:border-none">
      <CardContent className=" p-3 pt-1">
        <div className="flex items-start gap-5">
          <p className="text-[14px] uppercase font-bold mt-[6px] whitespace-nowrap text-default">
            Feb 2023 - Present
          </p>
          <div>
            <h2 className="font-medium">Junior Software Engineer</h2>

            <a
              href="https://www.inaraconsultancy.com/"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <span className="text-[13px] flex items-center gap-2 text-default pl-1 hover:text-defaultMax whitespace-nowrap">
                Inara Consultancy Services <ExternalLink size={17} />
              </span>
            </a>
          </div>
        </div>
        <p className=" text-[15px] mt-3 leading-[1.5] mb-4 text-muted-foreground">
          I have been a valued member of Inara Consultancy Services,
          contributing significantly to the development of diverse projects. My
          role involves utilizing cutting-edge technologies and build highly
          scalable web apps. I have actively contributed to the multiple
          decentralized applications (DApps) and web applications focusing on
          finance. Additionally, I&apos;ve played a key role in building Dapps
          on both the Solana and Ethereum blockchains.
        </p>
        <div className=" mt-2 flex flex-wrap gap-2 ">
          {skills.map((tag) => (
            <span
              key={tag}
              className=" px-2 py-1 bg-muted dark:bg-transparent dark:border dark:font-bold text-[12px] rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
