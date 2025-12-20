import React from "react";
import mypf from "../assets/Pfp.jpg";
import { FaPython, FaJsSquare, FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiCplusplus } from "react-icons/si";

const Mypf = () => {
  // Clock-like positions: 12 icons spread evenly around (like hours on a clock)
  // Mobile positions are closer to the image, desktop positions are further out
  const techIcons = [
    { Icon: FaPython, color: "text-blue-400", position: "top-[-60px] md:top-[-100px] left-[50%] -translate-x-1/2", delay: "0s" },
    { Icon: FaJsSquare, color: "text-yellow-400", position: "top-[-40px] md:top-[-70px] right-[-50px] md:right-[-90px]", delay: "0.5s" },
    { Icon: SiTypescript, color: "text-blue-500", position: "top-[5%] right-[-70px] md:right-[-130px]", delay: "1s" },
    { Icon: FaReact, color: "text-cyan-400", position: "top-[35%] right-[-80px] md:right-[-150px]", delay: "1.5s" },
    { Icon: FaJava, color: "text-red-500", position: "top-[65%] right-[-70px] md:right-[-130px]", delay: "2s" },
    { Icon: FaNode, color: "text-green-500", position: "bottom-[-40px] md:bottom-[-70px] right-[-50px] md:right-[-90px]", delay: "2.5s" },
    { Icon: FaHtml5, color: "text-orange-500", position: "bottom-[-60px] md:bottom-[-100px] left-[50%] -translate-x-1/2", delay: "3s" },
    { Icon: FaCss3Alt, color: "text-blue-400", position: "bottom-[-40px] md:bottom-[-70px] left-[-50px] md:left-[-90px]", delay: "3.5s" },
    { Icon: FaGitAlt, color: "text-orange-600", position: "top-[65%] left-[-70px] md:left-[-130px]", delay: "4s" },
    { Icon: SiTailwindcss, color: "text-teal-400", position: "top-[35%] left-[-80px] md:left-[-150px]", delay: "4.5s" },
    { Icon: SiCplusplus, color: "text-blue-600", position: "top-[5%] left-[-70px] md:left-[-130px]", delay: "5s" },
    { Icon: FaDocker, color: "text-blue-500", position: "top-[-40px] md:top-[-70px] left-[-50px] md:left-[-90px]", delay: "5.5s" },
  ];

  return (
    <div className="flex justify-center items-center w-full pt-12 md:pt-16 lg:pt-24 relative">
      <div className="absolute w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl animate-pulse -translate-x-4" />

      <div className="relative scale-[0.65] md:scale-95 lg:scale-105 translate-y-4 -translate-x-4 md:-translate-x-6 lg:-translate-x-8">
        {/* Floating Tech Icons */}
        {techIcons.map(({ Icon, color, position, delay }, index) => (
          <div
            key={index}
            className={`absolute ${position} z-10`}
            style={{
              animation: `float 3s ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <div className={`${color} text-3xl md:text-5xl lg:text-6xl opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-125 cursor-pointer drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]`}>
              <Icon />
            </div>
          </div>
        ))}

        <div
          className="
            relative w-64 h-96 md:w-72 md:h-[420px] lg:w-80 lg:h-[480px] rounded-2xl overflow-hidden
            border border-gray-700/60 shadow-[0_0_25px_rgba(168,85,247,0.4)]
            bg-gradient-to-br from-gray-800/80 to-gray-900/80
            backdrop-blur-md
            transition-transform duration-300
            hover:scale-105 hover:rotate-1
          "
        >
          <div className="absolute inset-0 rounded-2xl border border-purple-500/30 blur-sm" />
          <img src={mypf} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Floating Animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Mypf;
