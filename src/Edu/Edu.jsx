import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import Title from "../assets/Title/Title";
import Rocket from "../assets/Rocket.json";
import EduTree from "./EduTree";

const Edu = () => {
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

  return (
    <div id="education" className="min-h-[100vh] py-10 md:py-16 lg:py-20 px-4 md:px-8">
      <div
        ref={(el) => (elementRefs.current[0] = el)}
        className={`flex flex-col items-center transition-all duration-700 ${
          visibleElements.includes(0)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Title title="Educational Background" />
        <div className="flex flex-row items-center justify-center gap-2 md:gap-3 pt-2 max-w-4xl">
          <Lottie animationData={Rocket} className="w-12 md:w-16 lg:w-20 flex-shrink-0" />
          <p className="text-white text-sm md:text-base lg:text-lg font-normal text-center">
            My journey through knowledge and learning
          </p>
          <Lottie animationData={Rocket} className="w-12 md:w-16 lg:w-20 flex-shrink-0" />
        </div>
      </div>
      <div
        ref={(el) => (elementRefs.current[1] = el)}
        className={`mt-8 md:mt-12 lg:mt-16 transition-all duration-700 ${
          visibleElements.includes(1)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <EduTree />
      </div>
    </div>
  );
};

export default Edu;
