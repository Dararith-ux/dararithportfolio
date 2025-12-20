import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      isClickScrolling.current = true;
      setActiveSection(sectionId);
      setIsMenuOpen(false);

      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <Logo />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex px-2 md:px-6 lg:px-10 list-unstyled text-white gap-3 md:gap-6 lg:gap-8 font-semibold text-sm md:text-base lg:text-lg">
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
            <span>{item.label}</span>
            {activeSection === item.id && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white text-2xl p-2 z-50 relative"
        aria-label="Toggle menu"
      >
        <div className={`transition-all duration-300 ${isMenuOpen ? "rotate-180 scale-110" : ""}`}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-40 md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="p-6 pt-20 border-b border-gray-700/50">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Navigation
          </h2>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col p-4">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                cursor-pointer py-4 px-4 rounded-xl mb-2
                transition-all duration-300 transform
                ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
                ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-l-4 border-purple-400"
                    : "text-white hover:bg-white/5 hover:translate-x-2"
                }
              `}
              style={{
                transitionDelay: isMenuOpen ? `${index * 75}ms` : "0ms",
              }}
            >
              <span className="font-medium text-lg">{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Menu Footer */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-4"></div>
          <p className="text-gray-500 text-sm text-center">Dararith Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
