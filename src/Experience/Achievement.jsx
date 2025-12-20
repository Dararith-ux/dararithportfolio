import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
import { createPortal } from "react-dom";
import amccert from "../assets/Certificate/amc.jpg";
import moscmerit from "../assets/Certificate/moscmerit.jpg";
import moscsilver from "../assets/Certificate/moscsilver.jpg";
import physicprovincialround from "../assets/Certificate/physicprovincialround.jpg";
import physicnationalround from "../assets/Certificate/physicnationalroundparticipation.jpg";
import physicsbronze from "../assets/Certificate/physicsbronze.jpg";
import bacII from "../assets/Certificate/bacII.jpg";
import prg from "../assets/Certificate/prg.png";
import amt from "../assets/Certificate/amt.png";
import rupp from "../assets/Certificate/rupp.png";
import aupp from "../assets/Certificate/aupp.jpg";

const Achievement = memo(() => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const achievements = [
    {
      id: 1,
      title: "Angkor Mathematic Competition Gold Medalist",
      organization: "Bright Consultation",
      date: "2022",
      description: "Awarded a Gold Medal in the Grade 11-12 category at the Angkor Mathematics Competition, demonstrating exceptional problem-solving skills and mathematical proficiency among top students across Cambodia.",
      thumbnail: amccert,
      images: [amccert],
    },
    {
      id: 2,
      title: "Mathematic Oustanding Student Cambodia 2022 Merit Award",
      organization: "MOSC Cambodia",
      date: "2022",
      description: "Received a Merit Award in the Grade 11 category at the Mathematics Outstanding Student of Cambodia (MOSC) competition, recognizing strong analytical abilities and consistent performance in advanced mathematical problem-solving.",
      thumbnail: moscmerit,
      images: [moscmerit],
    },
    {
      id: 3,
      title: "Mathematic Oustanding Student Cambodia 2023 Silver Medalist",
      organization: "MOSC Cambodia",
      date: "2023",
      description: "Earned a Silver Medal in the Grade 12 category at the Mathematics Outstanding Student of Cambodia (MOSC) 2023 competition, showcasing advanced mathematical reasoning and competing among the nation's top students.",
      thumbnail: moscsilver,
      images: [moscsilver],
    },
    {
      id: 4,
      title: "Grade 12 Outstanding Student Exam Provincial Round Physics 2nd Place",
      organization: "MoEYS Cambodia",
      date: "2023",
      description: "Achieved 2nd place in the Provincial Outstanding Student Examination in Physics, qualifying for the National Round. This accomplishment highlights strong understanding of physics concepts and problem-solving abilities at the provincial level.",
      thumbnail: physicprovincialround,
      images: [physicprovincialround],
    },
    {
      id: 5,
      title: "Grade 12 Outstanding Student Exam National Round in Physics (Certificate of Participation)",
      organization: "MoEYS Cambodia",
      date: "2023",
      description: "Participated in the National Round of the Outstanding Student Examination in Physics, representing the province among Cambodia's top physics students after qualifying from the provincial competition.",
      thumbnail: physicnationalround,
      images: [physicnationalround],
    },
    {
      id: 6,
      title: "Grade 12 Outstanding Student Exam National Round in Physics (Bronze Medalist)",
      organization: "MoEYS Cambodia",
      date: "2023",
      description: "Earned a Bronze Medal at the National Outstanding Student Examination in Physics, competing against over 80 participants from across the country. This achievement reflects strong physics knowledge and problem-solving skills at the national level.",
      thumbnail: physicsbronze,
      images: [physicsbronze],
    },
    {
      id: 7,
      title: "National Baccalaureate Examination (BAC II) Grade A",
      organization: "MoEYS Cambodia",
      date: "2023",
      description: "Achieved Grade A in the National Baccalaureate Examination (BAC II), demonstrating outstanding academic performance and comprehensive mastery across all examined subjects.",
      thumbnail: bacII,
      images: [bacII],
    },
    {
      id: 8,
      title: "Fully Funded Scholarship at Paragon International University",
      organization: "MoEYS Cambodia & Paragon International University",
      date: "2023",
      description: "Awarded a fully funded scholarship through the Ministry of Education, Youth and Sport (MoEYS) to study at Paragon International University, in recognition of achieving a Bronze Medal and demonstrating strong academic excellence and potential.",
      thumbnail: prg,
      images: [prg],
    },
    {
      id: 9,
      title: "Fully Funded Scholarship at Institute of Technology of Cambodia",
      organization: "AMT",
      date: "2024",
      description: "Awarded a fully funded scholarship through the AMT Association to study at the Institute of Technology of Cambodia (ITC), based on competitive evaluation through the ITC entrance examination.",
      thumbnail: amt,
      images: [amt],
    },
    {
      id: 10,
      title: "Fully Funded Scholarship at Royal University of Phnom Penh",
      organization: "MoEYS Cambodia",
      date: "2024",
      description: "Awarded a fully funded scholarship through the Ministry of Education, Youth and Sport (MoEYS) to study at the Royal University of Phnom Penh, in recognition of achieving a Bronze Medal at the National Outstanding Student Examination.",
      thumbnail: rupp,
      images: [rupp],
    },
    {
      id: 11,
      title: "Fully Funded Scholarship at American University of Phnom Penh",
      organization: "Ministry of Post and Telecommunications Cambodia",
      date: "2024",
      description: "Awarded a fully funded scholarship through the Ministry of Post and Telecommunications to study at the American University of Phnom Penh, after successfully passing the Digital Techo Talent scholarship examination.",
      thumbnail: aupp,
      images: [aupp],
    },
  ];

  useEffect(() => {
    // Show all cards at once when section becomes visible
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Show all cards immediately
          setVisibleCards(achievements.map((_, i) => i));
        }
      },
      { threshold: 0.05 }
    );

    // Observe the first card as a proxy for section visibility
    if (cardRefs.current[0]) {
      sectionObserver.observe(cardRefs.current[0]);
    }

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  const openModal = useCallback((item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  }, []);

  const nextImage = useCallback((e) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedItem]);

  const prevImage = useCallback((e) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  }, [selectedItem]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
        {achievements.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => openModal(item)}
            className={`bg-gradient-to-br md:bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-lg md:rounded-xl overflow-hidden border border-amber-500/30 hover:border-orange-400 transition-all duration-150 hover:scale-[1.02] hover:shadow-xl md:hover:shadow-2xl cursor-pointer transform ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
          >
            {/* Mobile: Card layout (vertical) */}
            <div className="flex flex-col md:hidden">
              {/* Thumbnail */}
              <div className="w-full h-24 bg-gray-800/50 overflow-hidden">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-900/50 to-orange-900/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="p-2 flex flex-col gap-1">
                <h3 className="text-xs font-bold text-white line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-amber-300 font-medium text-[10px] truncate">
                  {item.organization}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-400 text-[10px]">{item.date}</span>
                </div>
              </div>
            </div>

            {/* Desktop: Horizontal layout */}
            <div className="hidden md:flex md:flex-row">
              {/* Thumbnail */}
              <div className="w-48 bg-gray-800/50 flex-shrink-0 overflow-hidden">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-900/50 to-orange-900/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-row items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-amber-300 font-medium text-base truncate">
                    {item.organization}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-gray-400 text-sm">{item.date}</span>
                  <div className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                    Achievement
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Achievement Details */}
      {selectedItem && createPortal(
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full max-h-[85vh] overflow-auto">
            {/* Achievement Details Card */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden border border-amber-500/50 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Image Gallery */}
              {selectedItem.images && selectedItem.images.length > 0 ? (
                <div className="relative bg-gray-800">
                  <img
                    src={selectedItem.images[currentImageIndex]}
                    alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[50vh] object-contain"
                  />

                  {/* Navigation arrows - only show if multiple images */}
                  {selectedItem.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedItem.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === currentImageIndex ? "bg-amber-400" : "bg-white/50 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-amber-900/50 to-orange-900/50 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-amber-400 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <p className="text-amber-300 text-sm">No images available</p>
                  </div>
                </div>
              )}

              {/* Achievement Details */}
              <div className="p-6 bg-gradient-to-r from-amber-900/50 to-orange-900/50">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-amber-300 font-medium mb-4">
                  {selectedItem.organization}
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                  {selectedItem.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-300">
                    <span className="text-gray-400">Date:</span> {selectedItem.date}
                  </p>
                  {selectedItem.images && selectedItem.images.length > 1 && (
                    <p className="text-sm text-gray-400">
                      {currentImageIndex + 1} / {selectedItem.images.length}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-4">
              Click anywhere to close
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
});

Achievement.displayName = 'Achievement';

export default Achievement;
