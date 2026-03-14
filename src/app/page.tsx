import { Sidebar } from "@/components/layout/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <Sidebar />
      </header>
      
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
