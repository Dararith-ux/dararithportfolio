import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animation.json";

const Right = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex px-4 md:px-8 lg:px-[150px] justify-center">
      {/* Lottie animation with slide in from right and scale effect */}
      <div
        className={`transform transition-all duration-1000 ease-out
          ${isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-20 opacity-0 scale-90"}`}
      >
        <Lottie
          animationData={Animation}
          className="w-64 h-64 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px]"
        />
      </div>
    </div>
  );
};

export default Right;
