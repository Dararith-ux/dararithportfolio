import { useState, useEffect } from "react";
import { FaCode, FaGithub, FaUser } from "react-icons/fa";

const Landing = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animation stages
    const timers = [
      setTimeout(() => setStage(1), 300),   // Icons appear
      setTimeout(() => setStage(2), 1200),  // "Welcome to my" appears
      setTimeout(() => setStage(3), 2000),  // "Portfolio Website" appears
      setTimeout(() => setStage(4), 3000),  // Loading bar starts
      setTimeout(() => setFadeOut(true), 4000), // Start fade out
      setTimeout(() => onComplete(), 4700), // Complete and show main content
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const icons = [
    { Icon: FaCode, color: "text-purple-400", label: "Code" },
    { Icon: FaGithub, color: "text-white", label: "GitHub" },
    { Icon: FaUser, color: "text-pink-400", label: "Profile" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gray-900 flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-10 px-4">
        {/* Row 1: Icons */}
        <div className="flex gap-10 md:gap-20">
          {icons.map(({ Icon, color, label }, index) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-3 transition-all duration-700 ease-out ${
                stage >= 1
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-50"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`${color} text-5xl md:text-7xl lg:text-8xl transition-all duration-500`}
                style={{
                  animation: stage >= 1 ? `iconFloat 2.5s ease-in-out infinite` : "none",
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <Icon />
              </div>
              <span
                className={`text-gray-400 text-xs md:text-sm font-medium transition-all duration-500 ${
                  stage >= 1 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: "Welcome to my" */}
        <h2
          className={`text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 transition-all duration-700 ease-out ${
            stage >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Welcome to my
        </h2>

        {/* Row 3: "Portfolio Website" with typing effect dots */}
        <div className="text-center">
          <h1
            className={`text-4xl md:text-6xl lg:text-8xl font-bold transition-all duration-700 ease-out ${
              stage >= 3
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Portfolio Website
            </span>
          </h1>

          {/* Animated typing dots */}
          <div
            className={`flex justify-center gap-2 mt-4 transition-all duration-500 ${
              stage >= 3 ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                style={{
                  animation: stage >= 3 ? "dotBounce 1.2s ease-in-out infinite" : "none",
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading progress bar */}
        <div
          className={`mt-6 transition-all duration-500 ${
            stage >= 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-56 md:w-72 h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full transition-all ease-out"
              style={{
                width: stage >= 4 ? "100%" : "0%",
                transitionDuration: "1000ms"
              }}
            />
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-3 text-center tracking-wider">
            Loading experience...
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-12px) rotate(3deg);
          }
          75% {
            transform: translateY(-8px) rotate(-3deg);
          }
        }
        @keyframes dotBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
