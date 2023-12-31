"use client";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import { Label } from "../ui/label";
import { hashData } from "@/utils/utils";
import { initialState } from "./contact";
import { useState } from "react";

const base_url = process.env.NEXT_PUBLIC_SERVER_URL;

type TProps = {
  formState: typeof initialState;
  setFormState: React.Dispatch<React.SetStateAction<typeof initialState>>;
};

const initialErrorState = {
  name: "",
  email: "",
  message: "",
};

const ContactForm: React.FC<TProps> = ({ formState, setFormState }) => {
  const [error, setError] = useState(initialErrorState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async () => {
    try {
      const res = Object.keys(formState).map((key) => {
        if (formState[key as keyof typeof formState] === "") {
          setError((prev) => ({ ...prev, [key]: `${key} field is Required` }));
          return false;
        } else {
          setError((prev) => ({ ...prev, [key]: "" }));
          return true;
        }
      });

      if (res.includes(false)) return;

      const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (!emailRegex.test(formState.email)) {
        setError((prev) => ({ ...prev, email: "Invalid email" }));
        return;
      }

      setFormState((prev) => ({ ...prev, status: "loading" }));
      const hashKey = hashData();
      const { data } = await axios.post(
        `${base_url}/send-email`,
        {
          userName: formState.name,
          email: formState.email,
          message: formState.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${hashKey}`,
          },
        }
      );
      if (data.status) {
        setFormState((prev) => ({ ...prev, status: "success" }));
      } else {
        alert("Problem in sending email, please try again later");
      }
    } catch (error) {
      alert("Problem in sending email, please try again later");
    }
  };

  const handleOnFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <>
      <form
        className=" flex flex-col gap-4 m-1"
        data-testid="form"
        onSubmit={(e) => e.preventDefault()}
      >
        <fieldset>
          <Label htmlFor="name" className=" block">
            Name
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              className=" py-6 mt-2 text-[16px] font-normal"
              onFocus={handleOnFocus}
            />
          </Label>

          <span className=" text-red-600 text-[13px] capitalize">
            {error.name}
          </span>
        </fieldset>

        <fieldset>
          <Label htmlFor="email" className=" block">
            Email
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              className=" py-6 mt-2 text-[16px] font-normal"
              onFocus={handleOnFocus}
            />
          </Label>

          <span className=" text-red-600 text-[13px] capitalize">
            {error.email}
          </span>
        </fieldset>

        <fieldset>
          <Label htmlFor="message" className=" block">
            Message
            <Textarea
              name="message"
              onChange={handleChange}
              className=" max-h-[150px] min-h-[50px] text-[16px] mt-2 font-normal"
              onFocus={handleOnFocus}
            />
          </Label>

          <span className=" text-red-600 text-[13px] capitalize">
            {error.message}
          </span>
        </fieldset>

        <Button
          type="button"
          aria-disabled={formState.status === "loading"}
          variant={formState.status === "loading" ? "outline" : "default"}
          className=" rounded"
          disabled={formState.status === "loading"}
          onClick={handleFormSubmit}
        >
          {formState.status === "loading" ? "Sending.." : "Send"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
