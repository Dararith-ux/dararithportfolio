import React, { useState, useEffect, useRef } from "react";
import Title from "../assets/Title/Title";
import Achievement from "./Achievement";
import Extracurricular from "./Extracurricular";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("achievement");
  const [visibleElements, setVisibleElements] = useState([]);
  const elementRefs = useRef([]);

  useEffect(() => {
    const observers = elementRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const tabs = [
    { id: "achievement", label: "Achievement", color: "from-amber-500 to-orange-500" },
    { id: "extracurricular", label: "Extracurricular", color: "from-violet-500 to-purple-500" },
  ];

  return (
    <div id="experience" className="min-h-[100vh] py-10 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      {/* Title Section - Slide in from bottom */}
      <div
        ref={(el) => (elementRefs.current[0] = el)}
        className={`flex flex-col items-center mb-8 md:mb-10 lg:mb-12 transition-all duration-700 ease-out ${
          visibleElements.includes(0)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Title title="My Experience" />
        <p
          className={`text-white text-sm md:text-base lg:text-lg font-normal mt-3 md:mt-4 text-center px-4 transition-all duration-700 ${
            visibleElements.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Achievements and activities that shaped my journey
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto">
        <div
          ref={(el) => (elementRefs.current[1] = el)}
          className={`grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-8 transition-all duration-700 ease-out ${
            visibleElements.includes(1)
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative py-3 md:py-4 lg:py-6 px-3 md:px-6 lg:px-8 rounded-lg md:rounded-xl font-bold text-sm md:text-base lg:text-xl
                transition-all duration-500 transform
                ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white scale-105 shadow-2xl`
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
                }
                ${visibleElements.includes(1)
                  ? "opacity-100 translate-x-0"
                  : index === 0 ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
                }
              `}
              style={{ transitionDelay: visibleElements.includes(1) ? `${400 + index * 150}ms` : "0ms" }}
            >
              {/* Active indicator */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 md:translate-y-2">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 md:border-l-8 md:border-r-8 md:border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Display Area - Scale and slide up */}
        <div
          ref={(el) => (elementRefs.current[2] = el)}
          className={`bg-gray-800/30 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 min-h-[400px] md:min-h-[500px] border border-gray-700/50 shadow-xl transition-all duration-700 ease-out ${
            visibleElements.includes(2)
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-16"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div
            key={activeTab}
            className="animate-slideUp"
          >
            {activeTab === "achievement" && <Achievement />}
            {activeTab === "extracurricular" && <Extracurricular />}
          </div>
        </div>
      </div>

      {/* Tab content slide animation */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Experience;
