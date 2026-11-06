import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import OtherCertifications from "./components/sections/OtherCertifications";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import NeuralBackground from "./components/ui/NeuralBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base relative">
      <NeuralBackground />
      <div className="neural-bg" />
      <div className="cyber-grid" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <OtherCertifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}