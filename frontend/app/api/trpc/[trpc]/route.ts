import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import CryptoJS from "crypto-js";

const handler = (req: Request) => {
  const auth = req.headers.get("authorization")?.split(" ")[1];

  if (!auth) return new Response("Unauthorized", { status: 401 });

  const secretKey = process.env.NEXT_PUBLIC_MASTER_KEY!;
  const decryptedData = CryptoJS.AES.decrypt(auth, secretKey).toString(
    CryptoJS.enc.Utf8
  );

  const formateData = JSON.parse(decryptedData);

  if (!decryptedData || formateData?.key !== process.env.NEXT_PUBLIC_HASH_KEY!)
    return new Response("Unauthorized", { status: 401 });

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => await createContext(),
  });
};

export { handler as GET, handler as POST };
