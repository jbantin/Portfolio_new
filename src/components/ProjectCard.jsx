import { useTheme } from "../context/ThemeContext";
import githubImg from "../assets/github.svg";
const ProjectCard = (project) => {
  //   if (!props) return;

  const { head, techs = [], description, link, gitLink = [] } = project.props;
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-xl ${
        isDarkMode ? "border-white/10 border" : "border-gray-300/50 border"
      } hover:-translate-y-1 transition-all`}
    >
      <h3 className="text-xl font-bold mb-2">{head}</h3>
      <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech, key) => (
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
          href={link}
          target="_blank"
          className="text-orange-400 hover:text-orange-300 transition-colors mt-4"
        >
          View Project
        </a>
        <div className="flex gap-3">
          {gitLink.map((link, index) => (
            <a key={index} href={link} target="_blank">
              <img className="w-8 pt-1" src={githubImg} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
