import Link from "next/link";
import notFound from "../public/404_image.png";
import { Home } from "lucide-react";
import { Image } from "@nextui-org/react";

export default function NotFound() {
  return (
    <main
      className=" flex items-center justify-center"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className=" flex items-center justify-center flex-col">
        <Image
          src={notFound.src}
          alt="404 image"
          width={350}
          height={350}
          isBlurred
        />
        <p>Oops! This page is not found...</p>
        <Link href="/" className=" mt-4">
          <Home size={24} />
        </Link>
      </div>
    </main>
  );
}
