import { motion } from "motion/react";
import githubImg from "../../assets/github.svg";
import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";
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
          {projects.map((project, index) => (
            <div key={index}>
              <motion.div
                initial={{
                  transform:
                    index % 2 === 0
                      ? `translateX(${Math.random() * -500}px)`
                      : `translateX(${Math.random() * 500}px)`,
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
                <ProjectCard key={index} props={project} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
