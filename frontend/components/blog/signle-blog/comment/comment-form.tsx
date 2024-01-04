"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import action from "./action";
import axios from "axios";
import { baseUrl } from "../views";
import { getLocalData, hashData } from "@/utils/utils";
import { usePathname } from "next/navigation";

const CommentForm = () => {
  const [pending, setPending] = useState(false);
  const pathName = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get("comment");

    if (!comment) return alert("Please enter a comment");
    setPending(true);

    try {
      const hashKey = hashData();
      const blogId = pathName.split("/")[2];
      const id = getLocalData("tempId");
      const packet = {
        comment,
        blogId,
        userId: id,
      };
      await axios.post(`${baseUrl}/comment`, packet, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hashKey}`,
        },
      });
      inputRef!.current!.value = "";
      action();
      setPending(false);
    } catch (error) {
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
        ref={inputRef}
      />
      <Button disabled={pending} type="submit" className=" py-6 px-[30px]">
        {pending ? "Sending..." : "Send"}
      </Button>
    </form>
  );
};

export default CommentForm;
