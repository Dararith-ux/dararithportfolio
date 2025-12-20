import React, { useEffect, useRef, useState } from "react";
import Button from "../assets/Button/Button";
import Social from "../assets/Button/Social";
import { faFacebookF, faLinkedinIn, faTelegramPlane, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Left = () => {
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
    <div ref={ref} className="flex px-4 md:px-8 lg:px-[150px] justify-center lg:justify-start">
      <div className="flex flex-col gap-3 md:gap-4 text-center lg:text-left">
        {/* Title - Slide in from left */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text
            transform transition-all duration-700 ease-out
            ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
        >
          Frontend
        </h1>
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text
            transform transition-all duration-700 ease-out delay-150
            ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
        >
          Developer
        </h1>

        {/* Subtitle - Fade in and slide up */}
        <div
          className={`flex flex-col gap-1 py-2 transform transition-all duration-700 ease-out delay-300
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white">
            Information Techonology Management
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white">Computer Science</p>
        </div>

        {/* Buttons - Slide in from bottom with stagger */}
        <div
          className={`flex flex-row gap-3 md:gap-5 justify-center lg:justify-start transform transition-all duration-700 ease-out delay-500
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Button labels="Project" />
          <Button labels="Contacts" />
        </div>

        {/* Social Icons - Pop in with stagger effect */}
        <div className="flex flex-row gap-3 md:gap-5 justify-center lg:justify-start">
          {[faFacebookF, faTiktok, faTelegramPlane, faXTwitter, faLinkedinIn].map((icon, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ease-out
                ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
              style={{ transitionDelay: isVisible ? `${700 + index * 100}ms` : "0ms" }}
            >
              <Social app={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Left;
