import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import "./index.css";
import "./fonts/PlayFair/PlayfairDisplay-Black.ttf";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import Stars from "./components/Stars";

function App() {
  const { isDarkMode } = useTheme();
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end"],
  });
  let x = useTransform(scrollYProgress, [0, 1], [0, -1144]);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        ref={container}
        className={`scroll-smooth min-h-screen transition-all duration-700 
        ${isDarkMode ? " text-gray-100" : " text-gray-900"} 
        overflow-hidden`}
      >
        <Stars scroll={x} darkMode={isDarkMode} />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scroll={x} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <motion.div
          initial={{ transform: "translateY(-300px)", opacity: 0.1 }}
          whileInView={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: { type: "spring", duration: 1.5 },
          }}
        >
          <Home />
        </motion.div>
        <About />
        <Projects />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: { duration: 1 },
          }}
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
}

export default App;
