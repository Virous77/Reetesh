import { Input } from "@nextui-org/react";
import ButtonComp from "../common/button";
import { createNewProject } from "@/app/actions/action";
import EditorComp from "../editor/editor";
import ImageComp from "../common/image";

const Project = () => {
  return (
    <main className="flex items-center justify-center p-4 mt-5">
      <div className=" w-full md:w-[500px]">
        <h1 className=" text-xl text-success text-center mb-4">Add Projects</h1>

        <form action={createNewProject} className=" w-full flex flex-col gap-3">
          <Input
            label="Project Name"
            type="text"
            variant="bordered"
            name="title"
          />

          <Input
            label="Code Link"
            type="text"
            variant="bordered"
            name="codeLink"
          />

          <Input
            label="Live Link"
            type="text"
            variant="bordered"
            name="projectLink"
          />

          <Input label="Tags" type="text" variant="bordered" name="tags" />

          <Input label="Weight" type="text" variant="bordered" name="weight" />

          <Input
            label="Develop time"
            type="text"
            variant="bordered"
            name="develop"
          />
          <ImageComp />
          <EditorComp />
          <ButtonComp />
        </form>
      </div>
    </main>
  );
};

export default Project;
