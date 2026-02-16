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
      <hr className="border-neutral-900 my-4" />
      <About />
      <hr className="border-neutral-900 my-4" />
      <Skills />
      <hr className="border-neutral-900 my-4" />
      <Projects />
      <hr className="border-neutral-900 my-4" />
      <Education />
      <hr className="border-neutral-900 my-4" />
      <Experience />
      <hr className="border-neutral-900 my-4" />
      <Contact />
      <Footer />
    </main>
  );
}
