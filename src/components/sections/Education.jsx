import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
  const educationData = [
    {
      institution: "Delhi Public School Bangalore East",
      course: "Higher Secondary Education (PCM)",
      duration: "2016 – 2023",
    },
    {
      institution: "PES University",
      course: "B.Tech in Computer Science Engineering",
      duration: "2023 – Present",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-gray-900 text-white px-6 py-26"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Education</span>
          </h2>

          <div className="relative border-l-2 border-blue-500 pl-6 space-y-12">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative">
                <span className="absolute left-[-13px] top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900"></span>

                <div className="bg-gray-800 p-6 rounded-md shadow-md">
                  <h3 className="text-xl font-semibold text-cyan-400">{edu.institution}</h3>
                  <p className="text-gray-300 text-md mt-1">{edu.course}</p>
                  <p className="text-sm text-gray-400 mt-1">{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
