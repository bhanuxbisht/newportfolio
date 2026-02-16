import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 md:px-4">
      <Hero />
      <hr className="border-neutral-800" />
      <About />
      <hr className="border-neutral-800" />
      <Skills />
      <hr className="border-neutral-800" />
      <Projects />
      <hr className="border-neutral-800" />
      <Education />
      <hr className="border-neutral-800" />
      <Experience />
      <hr className="border-neutral-800" />
      <Contact />
      <Footer />
    </main>
  );
}
