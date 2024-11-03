import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Volunteering from "../components/Volunteering";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Volunteering />
      <About />
      <Contact />
    </div>
  );
};

export default Index;