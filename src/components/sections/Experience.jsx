import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const experiences = [
    {
      company: "Ovii.ai",
      role: "Backend Development Intern",
      duration: "Apr 2025 – May 2025",
    },
    {
      company: "Centre of Cognitive Computing and Computational Intelligence (C3I)",
      role: "Summer Intern",
      duration: "Jun 2025 – Present",
    },
    {
      company: "Parallax Club PESU",
      role: "Core Member",
      duration: "Oct 2024 – Present",
    },
    {
      company: "Hackerspace (HSP)",
      role: "Design Team Member",
      duration: "Oct 2024 – Present",
    }
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-900 text-white px-6 py-26"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Experience
          </h2>

          <div className="space-y-8 text-left">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-cyan-400">{exp.company}</h3>
                <p className="text-gray-300">{exp.role}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
