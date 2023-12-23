import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main className=" h-screen flex items-center justify-center">
      <div className=" shadow border p-3 rounded-lg">
        <h1 className=" text-xl">Welcome to Admin Board</h1>

        <ul className=" mt-4 flex items-center justify-center gap-3">
          <Link href="/project" className="text-primary hover:underline">
            Create Project
          </Link>
          <Link href="/skill" className=" text-primary hover:underline">
            Create Skill
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default HomePage;
