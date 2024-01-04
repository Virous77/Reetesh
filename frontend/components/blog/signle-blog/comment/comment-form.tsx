"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import action from "./action";

const CommentForm = () => {
  const [pending, setPending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get("comment");

    if (!comment) return alert("Please enter a comment");
    setPending(true);

    try {
      console.log(comment);
      e.currentTarget.reset();
      action();
      setPending(false);
    } catch (error) {
      console.log(error);
      setPending(false);
      alert("Failed to send comment");
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" flex items-center gap-2">
      <Input
        placeholder="Your Comment"
        aria-label="comment"
        required={true}
        className=" py-6"
        name="comment"
      />
      <Button disabled={pending} type="submit" className=" py-6 px-[30px]">
        {pending ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default CommentForm;
