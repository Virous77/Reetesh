import { z } from "zod";

export const Route = {
  name: "ApiTrpcTrpc",
  params: z.object({
    trpc: z.string(),
  })
};

