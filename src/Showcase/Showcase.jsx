import React, { useState, useEffect, useRef } from "react";
import Title from "../assets/Title/Title";
import Projects from "./Projects";
import Certificates from "./Certificates";
import TechStack from "./TechStack";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("projects");
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
    { id: "projects", label: "Projects", color: "from-purple-500 to-pink-500" },
    { id: "certificates", label: "Certificates", color: "from-blue-500 to-cyan-500" },
    { id: "techstack", label: "Tech Stack", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <div id="showcase" className="min-h-[100vh] py-20 px-8">
      <div
        ref={(el) => (elementRefs.current[0] = el)}
        className={`flex flex-col items-center mb-12 transition-all duration-700 ${
          visibleElements.includes(0)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Title title="My Showcase" />
        <p className="text-white text-lg font-normal mt-4">
          Explore my projects, certifications, and technical expertise
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto">
        <div
          ref={(el) => (elementRefs.current[1] = el)}
          className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-700 ${
            visibleElements.includes(1)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative py-6 px-8 rounded-xl font-bold text-xl
                transition-all duration-300 transform
                ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white scale-105 shadow-2xl`
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
                }
              `}
            >
              {/* Active indicator */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Display Area */}
        <div
          ref={(el) => (elementRefs.current[2] = el)}
          className={`bg-gray-800/30 backdrop-blur-md rounded-2xl p-8 min-h-[500px] border border-gray-700/50 shadow-xl transition-all duration-700 ${
            visibleElements.includes(2)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {activeTab === "projects" && <Projects />}
          {activeTab === "certificates" && <Certificates />}
          {activeTab === "techstack" && <TechStack />}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
