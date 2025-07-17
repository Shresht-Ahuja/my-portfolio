import { Typewriter } from "react-simple-typewriter";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-900 text-white"
    >
      <RevealOnScroll>
        <div className="text-center ml-65 mr-65">
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            <Typewriter
              words={[
                "Shresht Ahuja's Portfolio",
                "Full-Stack Developer",
                "3D Enthusiast",
                "ML Explorer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
              <br/> <br/>
          {/* 👇 Descriptive Text Below */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-fade-in opacity-0">
            I am a motivated and enthusiastic second-year Computer Science student with a broad skill set in Web Development, Machine Learning and 3D modeling.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
