export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent leading-right">
          jbantin.webDev
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          I am a passionate Full Stack Web Developer with a solid foundation in
          the MERN stack.
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
        </div>
      </div>
    </section>
  );
};
