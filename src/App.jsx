import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
<<<<<<< HEAD
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
=======
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
>>>>>>> dcf9723 (Initial commit)

const App = () => {
  return (
    <div className=" overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
      <div className=" fixed top-0 -z-10 h-full w-full ">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className=" container mx-auto px-6">
        <Navbar />
<<<<<<< HEAD
        <Technologies />
        <Projects />
        <Experience />
        <Hero />
=======
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education/>
>>>>>>> dcf9723 (Initial commit)
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
