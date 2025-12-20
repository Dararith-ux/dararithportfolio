import React, { useState, useEffect, useMemo } from "react";

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for mobile device
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce bubbles on mobile for better performance
  const bubbles = useMemo(() => {
    const allBubbles = [
      { size: "w-96 h-96", position: "top-[10%] left-[5%]", color: "bg-purple-500/20", duration: "20s", delay: "0s" },
      { size: "w-80 h-80", position: "top-[60%] left-[15%]", color: "bg-pink-500/20", duration: "25s", delay: "2s" },
      { size: "w-72 h-72", position: "top-[30%] right-[10%]", color: "bg-blue-500/20", duration: "22s", delay: "4s" },
      { size: "w-96 h-96", position: "bottom-[20%] right-[20%]", color: "bg-cyan-500/20", duration: "28s", delay: "1s" },
      { size: "w-64 h-64", position: "top-[80%] left-[40%]", color: "bg-indigo-500/20", duration: "24s", delay: "3s" },
      { size: "w-88 h-88", position: "top-[15%] left-[70%]", color: "bg-violet-500/20", duration: "26s", delay: "5s" },
      { size: "w-56 h-56", position: "bottom-[40%] left-[25%]", color: "bg-fuchsia-500/20", duration: "23s", delay: "1.5s" },
      { size: "w-72 h-72", position: "top-[50%] right-[30%]", color: "bg-rose-500/20", duration: "27s", delay: "3.5s" },
    ];
    // On mobile, only show 3 bubbles
    return isMobile ? allBubbles.slice(0, 3) : allBubbles;
  }, [isMobile]);

  // Generate small bubbles with fixed positions (avoid random on each render)
  const smallBubbles = useMemo(() => {
    const count = isMobile ? 3 : 12;
    const positions = [
      { top: 15, left: 20 }, { top: 45, left: 80 }, { top: 75, left: 40 },
      { top: 25, left: 60 }, { top: 55, left: 10 }, { top: 85, left: 70 },
      { top: 35, left: 30 }, { top: 65, left: 50 }, { top: 10, left: 90 },
      { top: 40, left: 5 }, { top: 70, left: 25 }, { top: 90, left: 55 },
    ];
    return positions.slice(0, count);
  }, [isMobile]);

  const colors = ["rgba(139, 92, 246, 0.3)", "rgba(236, 72, 153, 0.3)", "rgba(59, 130, 246, 0.3)", "rgba(34, 211, 238, 0.3)"];

  // If user prefers reduced motion, show static background
  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20" />
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 will-change-transform">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute ${bubble.size} ${bubble.position} ${bubble.color} rounded-full blur-3xl opacity-60`}
          style={{
            animation: `float-rotate ${bubble.duration} ease-in-out infinite`,
            animationDelay: bubble.delay,
            willChange: 'transform',
          }}
        />
      ))}

      {/* Additional smaller glowing bubbles - reduced on mobile */}
      {smallBubbles.map((pos, index) => (
        <div
          key={`small-${index}`}
          className="absolute w-32 h-32 rounded-full blur-2xl opacity-40"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            background: `radial-gradient(circle, ${colors[index % 4]}, transparent)`,
            animation: `pulse-float ${15 + (index % 5) * 2}s ease-in-out infinite`,
            animationDelay: `${index * 0.8}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      {/* Global CSS for animations */}
      <style>{`
        @keyframes float-rotate {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate3d(30px, -30px, 0) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translate3d(-20px, 40px, 0) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translate3d(40px, 20px, 0) rotate(270deg) scale(1.05);
          }
        }

        @keyframes pulse-float {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate3d(0, -50px, 0) scale(1.2);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
