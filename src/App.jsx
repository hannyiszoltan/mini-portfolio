import React from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Projects from "./components/Projects"
import SkillChart from "./components/SkillChart";

function App() {
  return (
    <div className="">
      <Intro />
      <Projects />
      <SkillChart />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
