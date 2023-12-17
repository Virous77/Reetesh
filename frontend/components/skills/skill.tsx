import { TSkill } from "@/types/type";
import { Image, Tooltip } from "@nextui-org/react";
import Social from "../social/social";
import { Home } from "lucide-react";
import Link from "next/link";

type TSkills = {
  skills: TSkill[];
};

const Skill: React.FC<TSkills> = ({ skills }) => {
  return (
    <main className=" pb-8 md:pb-0 h-fit relative ">
      <section className="  md:w-[60%] p-4 md:p-0  m-auto flex items-center justify-center mt-12 relative">
        <div className=" relative">
          <h2 className=" text-[25px] tracking-widest text-center sticky top-0 w-full dark:bg-black/60 bg-white/60 backdrop-blur z-10 p-2 md:p-0 ">
            My Skills
          </h2>

          <div className=" flex flex-col gap-3 items-center mt-10">
            <p className=" text-center opacity-70 tracking-wider">
              I am a seasoned developer with a strong proficiency in a versatile
              set of technologies. Having extensively worked with React,
              Next.js, Node.js, Express, MongoDB, TypeScript, GraphQL, REST API,
              Docker, Kubernetes, Solidity, and Anchor, I bring a wealth of
              experience to the table.
            </p>

            <p className=" text-center opacity-70 tracking-wider">
              My commitment to innovation extends to the realm of React,
              Next.js, Node.js, TypeScript and GraphQL, where I&apos;ve
              leveraged these technologies to enhance project efficiency and
              maintainability. Additionally my experience in Docker, and
              Kubernetes reflects a comprehensive understanding of modern
              application deployment and orchestration.
            </p>

            <p className=" text-center opacity-70 tracking-wider">
              Delving into blockchain technologies, I&apos;ve worked extensively
              with Solidity and Anchor, contributing to the development of
              decentralized applications (DApps) and exploring the frontier of
              blockchain innovation.
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-6 p-4 items-center  flex justify-center">
        <ul className=" flex flex-wrap items-center gap-5">
          {skills.map((skill) => (
            <li key={skill._id}>
              <Tooltip content={skill.name}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  isBlurred
                  shadow="lg"
                  isZoomed
                  className=" rounded-full hover:opacity-100 opacity-0 cursor-pointer"
                />
              </Tooltip>
            </li>
          ))}
        </ul>
      </section>

      <section className=" flex justify-center flex-col gap-5  items-center">
        <Social styles=" mt-6 justify-center" />
        <Link href="/">
          <Home color="green" />
        </Link>
      </section>
    </main>
  );
};

export default Skill;
