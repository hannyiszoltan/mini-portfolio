import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import SkillChart from "./components/SkillChart";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="animate__animated animate__bounceInLeft fixed z-10 p-2 top-5 md:left-20 left-2 bg-slate-200 dark:bg-stone-200 opacity-80 border rounded-xl"
      >
        {theme === "dark" ? sunIcon : moonIcon}
      </button>

      <div className="overflow-hidden bg-white dark:bg-stone-800 dark:text-stone-300">
        <Intro />
        <AnimationOnScroll
          className="fixed z-10 p-2 bottom-5 md:right-20 right-2 dark:text-black bg-slate-200 dark:bg-stone-200 opacity-80 border rounded-xl"
          animateIn="animate__animated animate__bounceInRight"
          animateOut="animate__animated animate__bounceOutRight"
          animateOnce={true}
        >
          <a href="#top">
            <button>^</button>
          </a>
        </AnimationOnScroll>
        <Projects />
        <SkillChart />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
