import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiBlender,
  SiGit,
  SiGithub,
  SiMysql
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Python", icon: <img src="./python.png" className="w-8 h-8 object-contain" /> },
    { name: "C", icon: <SiC className="text-blue-300" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
    { name: "Machine Learning", icon: <img src="./brain.png" className="w-8 h-8 object-contain" /> },
    { name: "Blender (3D)", icon: <SiBlender className="text-orange-400" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 transform transition-transform duration-200 hover:scale-105 rounded-lg p-4 shadow-lg flex flex-col items-center justify-center"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
