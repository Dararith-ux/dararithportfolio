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

      {/* Mobile Menu Panel - Minimized with blur */}
      <div
        className={`fixed top-0 right-0 h-auto max-h-[85vh] w-56 bg-gray-900/70 backdrop-blur-xl z-40 md:hidden transform transition-all duration-300 ease-out shadow-2xl rounded-bl-2xl border-l border-b border-gray-700/30 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Menu Header */}
        <div className="p-4 pt-16 border-b border-gray-700/30">
          <h2 className="text-base font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Menu
          </h2>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col p-3">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                cursor-pointer py-3 px-3 rounded-lg mb-1
                transition-all duration-300 transform
                ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
                ${
                  activeSection === item.id
                    ? "bg-purple-500/20 text-purple-400 border-l-2 border-purple-400"
                    : "text-white/90 hover:bg-white/10 hover:translate-x-1"
                }
              `}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <span className="font-medium text-sm">{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Menu Footer */}
        <div className="px-4 pb-4 pt-2">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-3"></div>
          <p className="text-gray-500 text-xs text-center">Dararith</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
