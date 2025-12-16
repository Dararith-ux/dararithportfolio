import React, { useState, useEffect, useRef } from "react";
import { FaPython, FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaGithub, FaFigma, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiCplusplus } from "react-icons/si";

const TechStack = () => {
  const [visibleCategories, setVisibleCategories] = useState([]);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const observers = categoryRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCategories((prev) => [...new Set([...prev, index])]);
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

  const techCategories = [
    {
      category: "Languages",
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Python", icon: FaPython, color: "text-blue-400" },
        { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      ],
    },
    {
      category: "Frontend",
      color: "from-cyan-500 to-blue-500",
      technologies: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      ],
    },
    {
      category: "UX/UI Design",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Figma", icon: FaFigma, color: "text-purple-400" },
        { name: "WordPress", icon: FaWordpress, color: "text-blue-500" },
      ],
    },
    {
      category: "Tools",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {techCategories.map((category, idx) => (
        <div
          key={idx}
          ref={(el) => (categoryRefs.current[idx] = el)}
          className={`space-y-4 transition-all duration-700 ${
            visibleCategories.includes(idx)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${idx * 150}ms` }}
        >
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
            {category.category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-110 cursor-pointer flex flex-col items-center justify-center gap-3"
                >
                  <IconComponent className={`${tech.color} text-5xl`} />
                  <span className="text-white font-medium text-center">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
