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
    <div id="education" className="min-h-[100vh] py-20">
      <div
        ref={(el) => (elementRefs.current[0] = el)}
        className={`flex flex-col items-center transition-all duration-700 ${
          visibleElements.includes(0)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <Title title="Educational Background" />
        <div className="flex flex-row items-center justify-center gap-3 pt-2">
          <Lottie animationData={Rocket} style={{ width: "80px" }} />
          <p className="text-white text-lg font-normal">
            My journey through knowledge and learning
          </p>
          <Lottie animationData={Rocket} style={{ width: "80px" }} />
        </div>
      </div>
      <div
        ref={(el) => (elementRefs.current[1] = el)}
        className={`mt-16 transition-all duration-700 ${
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
