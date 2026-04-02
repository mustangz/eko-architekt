import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Training from "@/components/Training";
import Collaborations from "@/components/Collaborations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Training />
      <Collaborations />
      <Contact />
      <Footer />
    </>
  );
}
