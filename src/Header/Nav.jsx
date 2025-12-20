import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const isClickScrolling = useRef(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "showcase", label: "Showcase" },
    { id: "experience", label: "Experience" },
  ];

  useEffect(() => {
    const sectionIds = navItems.map(item => item.id);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in upper portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      // Don't update during click-triggered scrolling
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set flag to prevent observer updates during click scroll
      isClickScrolling.current = true;
      setActiveSection(sectionId);

      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reset flag after scroll animation completes
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <Logo />
      <ul className="px-2 md:px-6 lg:px-10 list-unstyled text-white flex gap-3 md:gap-6 lg:gap-8 font-semibold text-sm md:text-base lg:text-lg">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              cursor-pointer transition-all duration-300 relative
              border-b-2 pb-1
              ${
                activeSection === item.id
                  ? "text-purple-400 border-purple-400"
                  : "text-white border-transparent hover:text-purple-300 hover:border-purple-300"
              }
            `}
          >
            <span className="hidden md:inline">{item.label}</span>
            <span className="md:hidden">{item.label.split(' ')[0]}</span>
            {activeSection === item.id && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
