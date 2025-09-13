import React from "react";
import mypf from "../assets/mypf.png";
const Mypf = () => {
  return (
    <div className="flex justify-center items-center w-full pt-20 relative">
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl animate-pulse" />
      <div
        className="
          relative w-72 h-96 rounded-2xl overflow-hidden
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
  );
};

export default Mypf;
