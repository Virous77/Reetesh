"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

const ButtonComp = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="shadow"
      color="primary"
      type="submit"
      className=" rounded"
      disabled={pending}
    >
      {pending ? "Saving..." : "Add Project"}
    </Button>
  );
};

export default ButtonComp;
