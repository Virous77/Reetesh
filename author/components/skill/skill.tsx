import { Input } from "@nextui-org/react";
import ButtonComp from "../common/button";
import ImageComp from "../common/image";
import { createSkill } from "@/app/actions/skill-action";

const Skill = () => {
  return (
    <main className="flex items-center justify-center p-4 mt-5">
      <div className=" w-full md:w-[500px]">
        <h1 className=" text-xl text-success text-center mb-4">Add Skill</h1>

        <form action={createSkill} className=" w-full flex flex-col gap-3">
          <Input
            label="Skill Name"
            type="text"
            variant="bordered"
            name="name"
          />
          <Input label="Level" type="text" variant="bordered" name="level" />
          <Input label="About" type="text" variant="bordered" name="about" />
          <ImageComp />
          <ButtonComp />
        </form>
      </div>
    </main>
  );
};

export default Skill;
