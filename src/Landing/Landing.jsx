import React, { useState, useEffect } from "react";
import { FaCode, FaLaptopCode, FaTerminal, FaCoffee } from "react-icons/fa";
import { SiVisualstudiocode, SiReact } from "react-icons/si";

const Landing = ({ onComplete }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 3.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Complete landing animation after 4 seconds
    const completeTimer = setTimeout(() => {
      setShowWelcome(false);
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const codingIcons = [
    { Icon: FaCode, delay: "0s", position: "top-[20%] left-[15%]" },
    { Icon: FaLaptopCode, delay: "0.2s", position: "top-[15%] right-[20%]" },
    { Icon: SiReact, delay: "0.4s", position: "top-[60%] left-[10%]" },
    { Icon: FaTerminal, delay: "0.6s", position: "top-[70%] right-[15%]" },
    { Icon: SiVisualstudiocode, delay: "0.8s", position: "top-[40%] left-[25%]" },
    { Icon: FaCoffee, delay: "1s", position: "top-[50%] right-[25%]" },
  ];

  if (!showWelcome) return null;

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 z-[100] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse bottom-10 right-10" style={{ animationDelay: "1s" }}></div>
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Floating Coding Icons */}
      {codingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float-in opacity-0`}
          style={{ animationDelay: delay, animationFillMode: "forwards" }}
        >
          <Icon className="text-6xl text-purple-400/60" />
        </div>
      ))}

      {/* Welcome Text Container */}
      <div className="relative z-10 text-center">
        {/* "Welcome" Text */}
        <h1 className="text-7xl font-bold mb-4 animate-slide-down">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-white/80 animate-slide-up" style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}>
          To My Portfolio
        </p>

        {/* Code Symbol Animation */}
        <div className="mt-8 flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "backwards" }}>
          <span className="text-5xl text-purple-400 animate-bounce" style={{ animationDelay: "1.2s" }}>&lt;</span>
          <span className="text-5xl text-pink-400 animate-pulse" style={{ animationDelay: "1.4s" }}>/</span>
          <span className="text-5xl text-cyan-400 animate-bounce" style={{ animationDelay: "1.6s" }}>&gt;</span>
        </div>

        {/* Loading Bar */}
        <div className="mt-12 w-64 h-1 bg-gray-700/50 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-loading-bar"></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float-in {
          0% {
            opacity: 0;
            transform: translateY(100px) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(360deg);
          }
        }

        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float-in {
          animation: float-in 1.5s ease-out;
        }

        .animate-loading-bar {
          animation: loading-bar 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Landing;
