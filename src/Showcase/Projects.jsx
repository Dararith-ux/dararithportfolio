import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
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

  const projects = [
    {
      id: 1,
      title: "Robotic Hazard Waste Detection",
      description: "An intelligent autonomous system that leverages computer vision and deep learning to identify and classify hazardous waste materials in real-time. Built using SSD-MobileNetV2 architecture for efficient object detection, enabling safe and automated waste management in hazardous environments. With integration to Raspberry Pi and camera modules, this project aims to enhance safety protocols and streamline waste disposal processes.",
      technologies: ["SSD-MobileNetV2", "TensorFlow", "Object Detection API"],
      link: "https://github.com/Dararith-ux/roboticfinalproject.git",
    },
    {
      id: 2,
      title: "🎬 CineME: Movie Browsing Website",
      description: "CineME is a dynamic movie browsing web app powered by the TMDB API, built with JavaScript and Tailwind CSS. Users can explore trending films, watch trailers, manage a personalized \"Watch Later\" list, and even simulate adding new movies — all in a sleek, interactive interface.",
      technologies: ["HTML", "CSS", "Tailwinds", "JavaScript"],
      link: "https://github.com/Dararith-ux/CineME-Frontend-Web-Final-Project.git",
    },
    {
      id: 3,
      title: "Mini Web Calculator",
      description: "A simple yet functional web-based calculator built with React and Tailwind CSS. Features a clean UI, responsive design, and supports basic arithmetic operations.",
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript"],
      link: "https://github.com/Dararith-ux/calculator.git",
    },
    {
      id: 4,
      title: "Motor Parking System",
      description: "A terminal-based Java application for efficient motorbike parking management. Features user registration, check-in/check-out tracking with unique ID and plate number verification, and persistent data storage using text files. Built to streamline parking operations and maintain organized records.",
      technologies: ["Java", "File I/O", "Terminal UI"],
      link: "https://github.com/Dararith-ux/Motor-parking-system.git",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer transform ${
            visibleCards.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="text-purple-400 hover:text-purple-300 font-medium text-sm"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
