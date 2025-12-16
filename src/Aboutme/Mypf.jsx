import React from "react";
import mypf from "../assets/image.png";
import { FaPython, FaJsSquare, FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiCplusplus } from "react-icons/si";

const Mypf = () => {
  const techIcons = [
    { Icon: FaPython, color: "text-blue-400", position: "top-[-80px] left-[50%] -translate-x-1/2", delay: "0s" },
    { Icon: FaJsSquare, color: "text-yellow-400", position: "top-[-50px] right-[-60px]", delay: "0.5s" },
    { Icon: SiTypescript, color: "text-blue-500", position: "top-[10%] right-[-100px]", delay: "1s" },
    { Icon: FaReact, color: "text-cyan-400", position: "top-[50%] right-[-115px] -translate-y-1/2", delay: "1.5s" },
    { Icon: FaJava, color: "text-red-500", position: "top-[90%] right-[-100px]", delay: "2s" },
    { Icon: FaNode, color: "text-green-500", position: "bottom-[-50px] right-[-60px]", delay: "2.5s" },
    { Icon: FaHtml5, color: "text-orange-500", position: "bottom-[-80px] left-[50%] -translate-x-1/2", delay: "3s" },
    { Icon: FaCss3Alt, color: "text-blue-400", position: "bottom-[-50px] left-[-60px]", delay: "3.5s" },
    { Icon: FaGitAlt, color: "text-orange-600", position: "top-[90%] left-[-100px]", delay: "4s" },
    { Icon: SiTailwindcss, color: "text-teal-400", position: "top-[50%] left-[-115px] -translate-y-1/2", delay: "4.5s" },
    { Icon: SiCplusplus, color: "text-blue-600", position: "top-[10%] left-[-100px]", delay: "5s" },
    { Icon: FaDocker, color: "text-blue-500", position: "top-[-50px] left-[-60px]", delay: "5.5s" },
  ];

  return (
    <div className="flex justify-center items-center w-full pt-8 md:pt-12 lg:pt-20 relative">
      <div className="absolute w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl animate-pulse" />

      <div className="relative scale-75 md:scale-90 lg:scale-100">
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
            <div className={`${color} text-4xl opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-125 cursor-pointer drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]`}>
              <Icon />
            </div>
          </div>
        ))}

        <div
          className="
            relative w-56 h-80 rounded-2xl overflow-hidden
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
