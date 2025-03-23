import { useState, useEffect } from "react";
import { Hero } from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ParticleAnimation } from "./components/ui/ParticleAnimation";
import { Footer } from "./components/sections/Footer";

function App() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    document.title = "Justin To | Portfolio";
  }, []);

  return (
    <div className="bg-custom-gradient">
      {/* <ParticleAnimation /> */}
      <div className="relative z-10">
        <Hero setActive={setActive} />
        <Navbar active={active} setActive={setActive} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
