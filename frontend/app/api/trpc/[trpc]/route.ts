import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => await createContext(),
  });

export { handler as GET, handler as POST };
