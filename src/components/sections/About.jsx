import { RevealOnScroll } from "../RevealOnScroll";
const profilePic = "https://via.placeholder.com/300";
// Make sure to put your image in src/assets/

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-900 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Text Content */}
          <div className="space-y-10">
            <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm Shresht Ahuja
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a second-year Computer Science student with a passion for building and experimenting across multiple tech domains — including frontend development, backend engineering, and AI/ML systems.
              <br/><br/>
              I love turning ideas into reality through code and design. My curiosity keeps me constantly exploring — whether it's a new library, animation technique, or building multiplayer games for fun.
              <br/><br/>
              As part of my extracurricular involvement, I was the speaker of a Blender Workshop and conducted a 2-hour session teaching Blender basics with 3D modeling and animation.
            </p>
          </div>

          {/* RIGHT: Profile Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={profilePic}
              alt="Shresht Ahuja"
              className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};