"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

const NextUIProviderComp = ({ children }: { children: ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUIProviderComp;
