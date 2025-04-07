import { ThemeToggle } from "./ThemeToggle";
import ScrollText from "./ScrollText";
import { useTheme } from "../context/ThemeContext";

export function Navbar({ menuOpen, setMenuOpen, scroll }) {
  const { isDarkMode } = useTheme();

  return (
    <nav
      className={`fixed top-0 w-full z-40 py-4 transition-all duration-300 ${
        isDarkMode
          ? "backdrop-blur-md bg-black/30"
          : "backdrop-blur-md bg-white/30"
      }`}
    >
      <div className="max-w-5xl mx-auto ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="font-[Black] text-xl font-bold">
            <ScrollText scroll={scroll} />
          </a>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className={`${
                  isDarkMode
                    ? "text-white hover:text-orange-300"
                    : "text-gray-800 hover:text-orange-600"
                } transition-colors font-medium`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`${
                  isDarkMode
                    ? "text-white hover:text-orange-300"
                    : "text-gray-800 hover:text-orange-600"
                } transition-colors font-medium`}
              >
                About
              </a>
              <a
                href="#projects"
                className={`${
                  isDarkMode
                    ? "text-white hover:text-orange-300"
                    : "text-gray-800 hover:text-orange-600"
                } transition-colors font-medium`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`${
                  isDarkMode
                    ? "text-white hover:text-orange-300"
                    : "text-gray-800 hover:text-orange-600"
                } transition-colors font-medium`}
              >
                Contact
              </a>
            </div>
            <div
              className={`w-0 h-6 relative cursor-pointer z-40 md:hidden ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
