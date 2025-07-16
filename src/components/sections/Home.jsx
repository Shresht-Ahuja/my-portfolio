import { Typewriter } from "react-simple-typewriter";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-900 text-white"
    >
      <RevealOnScroll>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            <Typewriter
              words={["Shresht Ahuja's Portfolio", "Full-Stack Developer", "3D Enthusiast", "ML Explorer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>

        </div>
      </RevealOnScroll>
    </section>
  );
};