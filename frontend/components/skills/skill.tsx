import Social from '../social/social';
import { Home } from 'lucide-react';
import Image from 'next/image';
import { ToolTipComp } from '../ui/tooltip';
import { TSkill } from '@/models/skills';
import { Root } from '@/routes';

type TSkills = {
  skills: TSkill[];
};

const Skill: React.FC<TSkills> = ({ skills }) => {
  return (
    <div className=" pb-8 md:pb-0">
      <section className="m-auto flex items-center  justify-center p-4 md:w-[60%] md:p-0">
        <div className=" relative">
          <h2 className=" text-center text-[25px] tracking-widest  ">
            My Skills
          </h2>

          <div className=" mt-10 flex flex-col items-center gap-3">
            <p className=" text-center tracking-wider text-default">
              I am a seasoned developer with a strong proficiency in a versatile
              set of technologies. Having extensively worked with React,
              Next.js, Node.js, Express, MongoDB, TypeScript, GraphQL, REST API,
              Docker, Kubernetes, Solidity, and Anchor, I bring a wealth of
              experience to the table.
            </p>

            <p className=" text-center tracking-wider text-default">
              My commitment to innovation extends to the realm of React,
              Next.js, Node.js, TypeScript and GraphQL, where I&apos;ve
              leveraged these technologies to enhance project efficiency and
              maintainability. Additionally my experience in Docker, and
              Kubernetes reflects a comprehensive understanding of modern
              application deployment and orchestration.
            </p>

            <p className=" text-center tracking-wider text-default">
              Delving into blockchain technologies, I&apos;ve worked extensively
              with Solidity and Anchor, contributing to the development of
              decentralized applications (DApps) and exploring the frontier of
              blockchain innovation.
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-6 flex items-center  justify-center p-4">
        <ul className=" flex flex-wrap place-content-center items-center gap-5">
          {skills.map((skill) => (
            <li key={skill._id}>
              <ToolTipComp name={skill.name}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className=" cursor-pointer rounded-full"
                />
              </ToolTipComp>
            </li>
          ))}
        </ul>
      </section>

      <section className=" flex flex-col items-center justify-center  gap-5">
        <Social styles=" mt-6 justify-center" />
        <Root.Link aria-label="home">
          <Home className=" text-primary" />
        </Root.Link>
      </section>
    </div>
  );
};

export default Skill;
