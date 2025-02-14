import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
export const About = () => {
  
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Astro",
    "Next.js",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB/Mongoose",
    "PostgreSQL",
  ];
  
  return (
    <section 
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl tracking-[-0.08em] font-black mb-8 bg-gradient-to-br from-orange-500 to-zinc-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <motion.div
          initial={{ scale: 0.1, opacity: 0.1 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          }}
        >
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
            <p className="text-gray-300 mb-6">
              I am about to complete an intensive training program at DCI and
              continuously expand my skills in various programming languages and
              technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.1, opacity: 0.1 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          }}
        >
          <div className="grid grid-cols-1  gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>

              <ul className="  text-gray-300 space-y-2 ">
                <li>
                  <strong>Full Stack Web Developer </strong> - Digital Career
                  Institute
                </li>
                <li>
                  Relevant Coursework:
                  <ul className="list-disc list-inside  space-y-2 ">
                    <li className="mt-2">Linux, Git and GitHub</li>
                    <li>
                      HTML and CSS Fundamentals, SCSS, Bootstrap Framework
                    </li>
                    <li>
                      JavaScript Fundamentals, Node and NPM, Basic OOP, and
                      Concepts of Functional Programming
                    </li>
                    <li>DOM Manipulation, HTTP Requests, React</li>
                    <li>
                      REST API Development with Express, Database Fundamentals
                      with MongoDB, Security and Authentication
                    </li>
                    <li>Project Management, Practical Development</li>
                    <li>Job-Related Language Support</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
