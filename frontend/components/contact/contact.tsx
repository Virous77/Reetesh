"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import messageSent from "../../public/message.svg";
import Social from "../social/social";
import Image from "next/image";
import ContactForm from "./contact-form";
import { Card } from "../ui/card";

export const initialState = {
  name: "",
  email: "",
  message: "",
  status: "idle",
};

const Contact = () => {
  const [formState, setFormState] = useState(initialState);

  return (
    <div className=" mb-8 md:mb-0 md:h-[85vh] relative ">
      {formState.status === "success" ? (
        <Card
          className=" flex items-center justify-center flex-col gap-2 bg-transparent px-2 py-4 h-[350px]"
          data-testid="success"
        >
          <Image
            src={messageSent.src}
            alt="Message sent"
            height={150}
            width={150}
          />
          <p className=" text-[14px] text-center">
            {" "}
            Thank you for reaching out, will response back soon. 🥳{" "}
          </p>
        </Card>
      ) : (
        <>
          <div
            className="flex items-center justify-center mb-4"
            data-testid="initial"
          >
            <div className=" cursor-pointer text-[18px] flex items-center gap-1 bg-muted px-3 py-1 text-default hover:text-defaultMax rounded-[30px]">
              <a
                href="mailto:rajreetesh7@gmail.com"
                target="_blank"
                referrerPolicy="no-referrer"
                data-testid="mail"
              >
                Mail
              </a>
              <Mail size={20} />
            </div>
          </div>
          <ContactForm formState={formState} setFormState={setFormState} />
        </>
      )}

      <div className="mt-20 md:hidden block">
        <Social styles="" />
      </div>
    </div>
  );
};

export default Contact;
