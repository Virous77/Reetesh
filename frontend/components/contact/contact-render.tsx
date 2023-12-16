"use client";

import { ReactNode } from "react";
import Header from "../common/header";
import { useAppContext } from "@/contexts/useAppContext";

type TContactRender = {
  contactComp: ReactNode;
};

const ContactRender: React.FC<TContactRender> = ({ contactComp }) => {
  const { contactScroll } = useAppContext();
  return (
    <Header scroll={contactScroll} name="Contact">
      {contactComp}
    </Header>
  );
};

export default ContactRender;
