import { motion } from "motion/react";
import githubImg from "../../assets/github.svg";
import { useTheme } from "../../context/ThemeContext";
export const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="projects"
      className="min-h-screen flex item-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className={`text-4xl tracking-[-0.08em] font-black mb-8 ${
            isDarkMode
              ? "bg-gradient-to-br from-orange-500 to-zinc-400 bg-clip-text text-transparent"
              : "text-orange-600"
          }`}
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{
              transform: "translateX(-300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2 },
            }}
          >
            <div
              className={`p-6 rounded-xl ${
                isDarkMode
                  ? "border-white/10 border"
                  : "border-gray-300/50 border"
              } hover:-translate-y-1 transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">BrokeChain</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                Trading demo app for crypto currencies.
                <br />
                (Final Project DCI in progress)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.native", "TypeScript", "Node.js", "MongoDB"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://broke.dev-space.vip"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors mt-4"
                >
                  View Project
                </a>
                <div className="flex gap-3">
                  {/* <a
                    href="https://github.com/jbantin/test-frontend"
                    target="_blank"
                  >
                    <img className="w-8 pt-1" src={githubImg} alt="" />
                  </a>
                  <a
                    href="https://github.com/jbantin/expressBackend"
                    target="_blank"
                  >
                    <img className="w-8 pt-1" src={githubImg} alt="" />
                  </a> */}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2 },
            }}
          >
            <div
              className={`p-6 rounded-xl ${
                isDarkMode
                  ? "border-white/10 border"
                  : "border-gray-300/50 border"
              } hover:-translate-y-1 transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">Askohmat</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                Login/Signin Project with Email verification and private chatbot
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vue.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://vue-js-drink-search.vercel.app/"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors mt-4"
                >
                  View Project
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/jbantin/VueJsDrinks"
                    target="_blank"
                  >
                    <img className="w-8 pt-1" src={githubImg} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(-300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 1.1 },
            }}
          >
            <div
              className={`p-6 rounded-xl ${
                isDarkMode
                  ? "border-white/10 border"
                  : "border-gray-300/50 border"
              } hover:-translate-y-1 transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">Sissies Band</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                Project 'Band Webpage' HTML/CSS/Astro/Tailwind and a few lines
                of JavaScript
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Tailwind", "Astro", "JavaScript"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://sissies.netlify.app/"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors mt-4"
                >
                  View Project
                </a>

                <a
                  href="https://github.com/jbantin/sissiesWebpage"
                  target="_blank"
                >
                  <img className="w-8 pt-1" src={githubImg} alt="" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 1 },
            }}
          >
            <div
              className={`p-6 rounded-xl ${
                isDarkMode
                  ? "border-white/10 border"
                  : "border-gray-300/50 border"
              } hover:-translate-y-1 transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">
                Multiplayer (wasd/mouse)
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                Multiplayer top down shooter prototype with socket io in
                JavaScript
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "socket.io"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://multiplayer.jbantin.dev/"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors mt-4"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/jbantin/multiplayer-proto"
                  target="_blank"
                >
                  <img className="w-8 pt-1" src={githubImg} alt="" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(-300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 0.9 },
            }}
          >
            <div
              className={`p-6 rounded-xl ${
                isDarkMode
                  ? "border-white/10 border"
                  : "border-gray-300/50 border"
              } hover:-translate-y-1 transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">Know Your Place</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                Weather/Map App and AI-info project
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Tailwind",
                  "Leaflet",
                  "OpenWeather",
                  "Gemini-Api",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://know-your-place-alpha.vercel.app/"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors mt-4"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/jbantin/knowYourPlace"
                  target="_blank"
                >
                  <img className="w-8 pt-1" src={githubImg} alt="" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 1.1 },
            }}
          >
            <div
              className={`p-6 rounded-xl ${
                isDarkMode
                  ? "border-white/10 border"
                  : "border-gray-300/50 border"
              } hover:-translate-y-1 transition-all`}
            >
              <h3 className="text-xl font-bold mb-2">Zombie-Island</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                Game Project on canvas without libraries with my classmate Colin
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "Canvas"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://zombi-island.netlify.app/"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors mt-4"
                >
                  View Project
                </a>
                <a href="https://github.com/k0miker/Vampire" target="_blank">
                  <img className="w-8 pt-1" src={githubImg} alt="" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              transform: "translateX(-300px)",
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              transform: "translateX(0px)",
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2 },
            }}
          >
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/10 hover:shadow-[0_2px_8px_rgba(255, 153, 0, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Askohmat</h3>
              <p className="text-gray-400 mb-4">
                Login/Signin Project with Email verification and private chatbot
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://askohmat.vercel.app/"
                  target="_blank"
                  className="text-orange-400 hover:text-orange-300 transition-colors mt-4"
                >
                  View Project
                </a>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/jbantin/test-frontend"
                    target="_blank"
                  >
                    <img className="w-8 pt-1" src={githubImg} alt="" />
                  </a>
                  <a
                    href="https://github.com/jbantin/expressBackend"
                    target="_blank"
                  >
                    <img className="w-8 pt-1" src={githubImg} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
