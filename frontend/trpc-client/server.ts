import { createCallerFactory } from "@/trpc";
import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/router";

const createCaller = createCallerFactory(appRouter);
export const serverClient = createCaller(createContext());
