import React from "react";

const AnimatedBackground = () => {
  const bubbles = [
    { size: "w-96 h-96", position: "top-[10%] left-[5%]", color: "bg-purple-500/20", duration: "20s", delay: "0s" },
    { size: "w-80 h-80", position: "top-[60%] left-[15%]", color: "bg-pink-500/20", duration: "25s", delay: "2s" },
    { size: "w-72 h-72", position: "top-[30%] right-[10%]", color: "bg-blue-500/20", duration: "22s", delay: "4s" },
    { size: "w-96 h-96", position: "bottom-[20%] right-[20%]", color: "bg-cyan-500/20", duration: "28s", delay: "1s" },
    { size: "w-64 h-64", position: "top-[80%] left-[40%]", color: "bg-indigo-500/20", duration: "24s", delay: "3s" },
    { size: "w-88 h-88", position: "top-[15%] left-[70%]", color: "bg-violet-500/20", duration: "26s", delay: "5s" },
    { size: "w-56 h-56", position: "bottom-[40%] left-[25%]", color: "bg-fuchsia-500/20", duration: "23s", delay: "1.5s" },
    { size: "w-72 h-72", position: "top-[50%] right-[30%]", color: "bg-rose-500/20", duration: "27s", delay: "3.5s" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute ${bubble.size} ${bubble.position} ${bubble.color} rounded-full blur-3xl opacity-60`}
          style={{
            animation: `float-rotate ${bubble.duration} ease-in-out infinite`,
            animationDelay: bubble.delay,
          }}
        />
      ))}

      {/* Additional smaller glowing bubbles */}
      {[...Array(12)].map((_, index) => (
        <div
          key={`small-${index}`}
          className={`absolute w-32 h-32 rounded-full blur-2xl opacity-40`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ["rgba(139, 92, 246, 0.3)", "rgba(236, 72, 153, 0.3)", "rgba(59, 130, 246, 0.3)", "rgba(34, 211, 238, 0.3)"][
                index % 4
              ]
            }, transparent)`,
            animation: `pulse-float ${15 + (index % 5) * 2}s ease-in-out infinite`,
            animationDelay: `${index * 0.8}s`,
          }}
        />
      ))}

      {/* Global CSS for animations */}
      <style jsx>{`
        @keyframes float-rotate {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(30px, -30px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translate(-20px, 40px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translate(40px, 20px) rotate(270deg) scale(1.05);
          }
        }

        @keyframes pulse-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-50px) scale(1.2);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
