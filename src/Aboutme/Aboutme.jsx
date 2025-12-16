import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import Title from "../assets/Title/Title";
import Rocket from "../assets/Rocket.json";
import Intro from "./Intro";
import Mypf from './Mypf'
const Aboutme = () => {
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
    <div id="about" className="min-h-[100vh] py-10 md:py-16 lg:py-0 px-4 md:px-8">
      <div
        ref={(el) => (elementRefs.current[0] = el)}
        className={`pt-10 md:pt-16 lg:pt-20 flex flex-col items-center transition-all duration-700 ${
          visibleElements.includes(0)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Title title="About me" />
        <div className="flex flex-row items-center justify-center gap-2 md:gap-3 pt-2 max-w-4xl px-4">
          <Lottie animationData={Rocket} className="w-12 md:w-16 lg:w-20 flex-shrink-0" />
          <p className="text-white text-sm md:text-base lg:text-lg font-normal text-center">
            A tech-guy driven by curiosity, innovation, and an ideal passion for
            shaping the digital future.
          </p>
          <Lottie animationData={Rocket} className="w-12 md:w-16 lg:w-20 flex-shrink-0" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 justify-center items-center mt-8 lg:mt-0">
        <div
          ref={(el) => (elementRefs.current[1] = el)}
          className={`transition-all duration-700 ${
            visibleElements.includes(1)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Intro />
        </div>
        <div
          ref={(el) => (elementRefs.current[2] = el)}
          className={`transition-all duration-700 ${
            visibleElements.includes(2)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Mypf/>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
