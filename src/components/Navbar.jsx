import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70 blur-sm animate-glow"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
  </span>
  <span className="font-mono text-xl font-bold text-white"></span>
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Shresht Ahuja
          </a>
          </div>

          {/* Hamburger for mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Main Navigation + Icons (desktop only) */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Home</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">About</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Experience</a>
            <a href="#education" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">Education</a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Shresht-Ahuja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shresht-ahuja-79a688278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
