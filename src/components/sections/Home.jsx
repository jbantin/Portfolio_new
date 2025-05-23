import linkedinImg from "../../assets/linkedin.svg";
import { useTheme } from "../../context/ThemeContext";

export const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1
          className={`text-7xl md:text-8xl font-black tracking-[-0.08em] mb-6 ${
            isDarkMode
              ? "bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
              : "text-orange-600"
          } leading-right`}
        >
          jbantin.dev
        </h1>
        <p
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          } text-lg mb-8 max-w-lg mx-auto`}
        >
          I am a passionate software developer with a solid foundation in the
          MERN stack and will soon complete an Full-Stack Web Development
          training at the Digital Career Center. Additionally, I am highly
          interested in learning new web technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-orange-200/10"
          >
            Contact Me
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jbntn"
            className=" text-orange-500 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-orange-200/10"
          >
            <img
              className="w-10 pt-1"
              src={linkedinImg}
              alt="link to linkedin"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
