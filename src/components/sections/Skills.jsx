import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "MongoDB",
    "Python",
    "C",
    "C++",
    "Machine Learning",
    "Blender (3D)",
    "Git & GitHub",
    "SQL"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-6 py-30"
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
              className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-lg p-4 shadow-md text-center text-lg font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
