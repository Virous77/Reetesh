import Social from "../social/social";
import { Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { TSkill } from "@/models/skills";

type TSkills = {
  skills: TSkill[];
};

const Skill: React.FC<TSkills> = ({ skills }) => {
  return (
    <main className=" pb-8 md:pb-0">
      <section className="md:w-[60%] p-4 md:p-0  m-auto flex items-center justify-center">
        <div className=" relative">
          <h2 className=" text-[25px] tracking-widest text-center  ">
            My Skills
          </h2>

          <div className=" flex flex-col gap-3 items-center mt-10">
            <p className=" text-center text-default tracking-wider">
              I am a seasoned developer with a strong proficiency in a versatile
              set of technologies. Having extensively worked with React,
              Next.js, Node.js, Express, MongoDB, TypeScript, GraphQL, REST API,
              Docker, Kubernetes, Solidity, and Anchor, I bring a wealth of
              experience to the table.
            </p>

            <p className=" text-center text-default tracking-wider">
              My commitment to innovation extends to the realm of React,
              Next.js, Node.js, TypeScript and GraphQL, where I&apos;ve
              leveraged these technologies to enhance project efficiency and
              maintainability. Additionally my experience in Docker, and
              Kubernetes reflects a comprehensive understanding of modern
              application deployment and orchestration.
            </p>

            <p className=" text-center text-default tracking-wider">
              Delving into blockchain technologies, I&apos;ve worked extensively
              with Solidity and Anchor, contributing to the development of
              decentralized applications (DApps) and exploring the frontier of
              blockchain innovation.
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-6 p-4 items-center  flex justify-center">
        <ul className=" flex flex-wrap items-center gap-5 place-content-center">
          {skills.map((skill) => (
            <li key={skill._id}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className=" rounded-full cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>{skill.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </section>

      <section className=" flex justify-center flex-col gap-5  items-center">
        <Social styles=" mt-6 justify-center" />
        <Link href="/" aria-label="home">
          <Home className=" text-primary" />
        </Link>
      </section>
    </main>
  );
};

export default Skill;
