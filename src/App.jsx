import { useState } from "react";
import { motion } from "motion/react";
import "./App.css";

import "./index.css";
import "./fonts/PlayFair/PlayfairDisplay-Black.ttf";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black text-gray-100 overflow-hidden`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
