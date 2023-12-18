"use client";

import { Chip, Image, Input, Textarea } from "@nextui-org/react";
import { Mail } from "lucide-react";
import { contactActions } from "./actions";
import { SubmitButton } from "./button";
import { useState } from "react";
import messageSent from "../../public/message.svg";
import Social from "../social/social";
import Footer from "./footer";

const initialState = {
  name: "",
  email: "",
  message: "",
  status: "idle",
};

const Contact = () => {
  const [formState, setFormState] = useState(initialState);

  const handleFormActon = async (e: FormData) => {
    const data = await contactActions(e);
    setFormState(data!);
  };

  if (formState.status === "failed") {
    alert("Problem in sending email, please try again later");
  }

  return (
    <div className=" mb-8 md:mb-0 md:h-[85vh] relative">
      {formState?.status === "success" ? (
        <div className=" flex items-center justify-center flex-col gap-2">
          <Image
            src={messageSent.src}
            alt="Message sent"
            height={150}
            width={150}
          />
          <p className=" text-[14px]">
            {" "}
            Thank you contacting me will response back soon. 🥳{" "}
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center mb-4">
            <Chip
              startContent={<Mail size={23} />}
              variant="faded"
              color="success"
              className=" cursor-pointer hover:bg-success hover:text-foreground text-[18px]"
            >
              <a
                href="mailto:rajreetesh7@gmail.com"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Mail
              </a>
            </Chip>
          </div>

          <form action={handleFormActon} className=" flex flex-col gap-4">
            <Input
              type="text"
              variant="bordered"
              label="Name"
              name="name"
              isInvalid={formState!?.name.trim().length > 0}
              errorMessage={formState?.name}
              onFocus={() => setFormState((prev) => ({ ...prev, name: "" }))}
            />
            <Input
              type="email"
              variant="bordered"
              label="Email"
              name="email"
              isInvalid={formState!?.email.trim().length > 0}
              errorMessage={formState?.email}
              onFocus={() => setFormState((prev) => ({ ...prev, email: "" }))}
            />
            <Textarea
              label="Your Message"
              variant="bordered"
              name="message"
              isInvalid={formState!?.message.trim().length > 0}
              errorMessage={formState?.message}
              onFocus={() => setFormState((prev) => ({ ...prev, message: "" }))}
            />
            <SubmitButton />
          </form>
        </>
      )}

      <div className="mt-20 md:hidden block">
        <Social styles="" />
      </div>
    </div>
  );
};

export default Contact;
