// import Image from "next/image";

import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="fixed top-1/2 right-0 z-10">
        <ModeToggle />
      </div>

      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
