import { Typewriter } from "react-simple-typewriter";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-900 text-white"
    >
      <RevealOnScroll>
        <div className="text-center max-w-3xl">
          {/* Static Main Heading */}
          <h1 className="text-2xl md:text-6xl mb-10 font-bold text-white hover:scale-105 hover:text-cyan-400 transition duration-300 drop-shadow-[0_2px_5px_rgba(0,255,255,0.5)]">
            Shresht Ahuja's Portfolio
          </h1>

          {/* Typewriter Text Below Heading */}
          <h2 className="text-6xl md:text-10xl font-semibold text-cyan-400 mb-20 h-[40px]">
            <Typewriter
              words={["Full-Stack Developer", "3D Modeling Enthusiast", "ML Explorer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          {/* Paragraph Text */}
          <h4 className="text-gray-300 text-lg md:text-xl leading-relaxed animate-fade-in opacity-0">
            I am a motivated and enthusiastic second-year Computer Science student with a broad skill set in Web Development, Machine Learning, and 3D modeling.
          </h4>
        </div>
      </RevealOnScroll>
    </section>
  );
};
