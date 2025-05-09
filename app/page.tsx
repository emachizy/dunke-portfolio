// import Image from "next/image";

// import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import { Clients } from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { Skills } from "@/components/Skills";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { navItems } from "@/data";
// import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="fixed top-1/2 right-0 z-10">
        <ModeToggle />
      </div>

      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} className="" />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
