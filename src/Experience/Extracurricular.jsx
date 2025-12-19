import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import cloud from "../assets/Certificate/cloud.jpg";
import solidedge from "../assets/Certificate/solidedge.jpg";
import sangkran from "../assets/Certificate/sangkran.png";
import mekong from "../assets/Certificate/mekong.png";
import psd from "../assets/Certificate/psd.png";
import aunz from "../assets/Certificate/aunz.png";
import mosc from "../assets/Certificate/mosc.png";
import cimoc from "../assets/Certificate/cimoc.jpg";
import cncc from "../assets/Certificate/cncc.png";
import translatekh from "../assets/Certificate/translatekh.png";
import asefyls from "../assets/Certificate/asefyls.png";
import jla from "../assets/Certificate/jla.png";
import gac from "../assets/Certificate/gac.png";
const Extracurricular = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const activities = [
    {
      id: 1,
      title: "Cloud4Cambodia Bootcamp",
      organization: "USAID, Elix, C4C Cambodia, AWS Academy",
      date: "2024",
      description: "Selected as a participant in the Cloud4Cambodia Bootcamp, receiving comprehensive training in AWS Cloud Practitioner coursework, gaining hands-on experience with cloud technologies and preparing for industry-recognized certification.",
      thumbnail: cloud, // Replace with actual thumbnail image import
      images: [cloud], // Array of certificate/activity images
    },
    {
      id: 2,
      title: "Solid Edge Associate Level Certification Program",
      organization: "SIEMENS, STEAMING Cambodia & UYFC",
      date: "2024",
      description: "Selected to participate in the Solid Edge Associate Level Certification Program, receiving hands-on training in 3D design and printing technologies using Siemens Solid Edge software, developing practical CAD skills for engineering applications.",
      thumbnail: solidedge, // Replace with actual thumbnail image import
      images: [solidedge],
    },
    {
      id: 3,
      title: "AUPP Sangkranta Volunteer",
      organization: "AUPP & SGA",
      date: "2024",
      description: "Volunteered as a traditional games coordinator during the AUPP Sangkranta celebration event, helping organize and facilitate traditional Khmer games for participants, promoting cultural heritage and community engagement.",
      thumbnail: sangkran,
      images: [sangkran],
    },
    {
      id: 4,
      title: "AUPP Water Festival Event Volunteer",
      organization: "AUPP & SGA",
      date: "2024",
      description: "Served on the decoration team for the AUPP Water Festival celebration event, helping create traditional Khmer-themed decorations and contributing to the festive atmosphere that honored Cambodian cultural heritage.",
      thumbnail: sangkran,
      images: [sangkran],
    },
    {
      id: 5,
      title: "Mekong Major and Career Festival Volunteer",
      organization: "ទ​​​ Festival",
      date: "2024",
      description: "Served on the technical team for the Mekong Major and Career Festival, providing technical support and assistance to ensure smooth event operations and a successful experience for attendees.",
      thumbnail: mekong,
      images: [mekong],
    },
    {
      id: 6,
      title: "JCI Public Speaking & Debate Championship Volunteer",
      organization: "JCI Cambodia, JLA",
      date: "2025",
      description: "Volunteered as an event support member at the JCI Public Speaking and Debate Championship, assisting with event logistics, participant coordination, and ensuring smooth operations throughout the competition.",
      thumbnail: psd,
      images: [psd],
    },
    {
      id: 7,
      title: "Australia & New Zealand Education Fair Volunteer (Interpreter)",
      organization: "IDP Education",
      date: "2025",
      description: "Volunteered as an event support member at the Australia & New Zealand Education Fair, providing interpretation services, participant coordination, and ensuring smooth operations and consultation with local students and insitution representatives throughout the exhibition.",
      thumbnail: aunz,
      images: [aunz],
    },
    {
      id: 8,
      title: "The 6th MOSC Cambodia 2025",
      organization: "MOSC Cambodia",
      date: "2025",
      description: "Volunteered as a proctor team member and scoring committee at The 6th Mathematics Outstanding Student of Cambodia (MOSC) 2025 competition, ensuring fair examination conditions and accurate scoring for participating students.",
      thumbnail: mosc,
      images: [mosc],
    },
    {
      id: 9,
      title: "Administraticve Director & Exam Paper Committee Member",
      organization: "CIMOC Cambodia",
      date: "2025",
      description: "Served as Administrative Director and Exam Paper Committee member for the Cambodia International Mathematics Olympiad Champion (CIMOC), overseeing administrative operations and contributing to exam paper preparation for the competition.",
      thumbnail: cimoc,
      images: [cimoc],
    },
    {
      id: 10,
      title: "Cambodia National Cybersecurity Competition (Participant)",
      organization: "Ministry of Post and Telecommunications",
      date: "2025",
      description: "Participated in the Cambodia Cybersecurity National Competition, demonstrating skills and knowledge in cybersecurity challenges (Capture the Flags).",
      thumbnail: cncc,
      images: [cncc],
    },
    {
      id: 11,
      title: "TranslateKH Data Validation and Web Scraping Contributor",
      organization: "TranslateKH",
      date: "2025",
      description: "Contributed to the 3-month volunteer TranslateKH project by performing web scraping and data validation for Khmer-English translation datasets, ensuring accuracy and quality of bilingual language data for machine learning applications.",
      thumbnail: translatekh,
      images: [translatekh],
    },
    {
      id: 12,
      title: "Junior Leadership Academy (JLA) Trainee",
      organization: "JCI Cambodia",
      date: "2025",
      description: "Completed a 9-month leadership training program through the Junior Leadership Academy (JLA), developing essential leadership skills, community engagement abilities, and personal growth through workshops, mentorship, and hands-on projects.",
      thumbnail: jla,
      images: [jla],
    },
    {
      id: 13,
      title: "6th Asia-Europe Foundation Young Leader Summit 2025 Participant (Osaka, Japan)",
      hasJapanFlag: true,
      organization: "Asia-Europe Foundation (ASEF)",
      date: "2025",
      description: "Participated in an intensive hybrid leadership development program: Leadership Knowledge Building Phase (29 July - 26 August, online), Leadership in Action Phase (27 August - 29 September), and the Youth Summit in Osaka, Japan (29 September - 5 October). Engaged in cultural exchange activities, visited World Expo 2025, JICA headquarters, and collaborated with young leaders from Asia and Europe on global challenges.",
      thumbnail: asefyls,
      images: [asefyls],
    },
    {
      id: 14,
      title: "Global Education and Career Expo Volunteer",
      organization: "IDP",
      date: "2025",
      description: "Volunteered as a supporter during the panel discussion session at the Global Education and Career Expo organized by IDP, assisting with session logistics, microphone coordination, and ensuring smooth interactions between panelists and attendees.",
      thumbnail: gac,
      images: [gac],
    },
    // {
    //   id: 15,
    //   title: "Pinnacle Entrepreneur Forum Volunteer",
    //   organization: "ASEAN Women Entrepreneurs Network (AWEN)",
    //   date: "2025",
    //   description: "Volunteered as a stage team member at the Pinnacle Entrepreneur Forum organized by ASEAN Women Entrepreneurs Network (AWEN), assisting with stage setup, speaker coordination, and ensuring smooth transitions during presentations and panel discussions.",
    //   thumbnail: awen,
    //   images: [awen],
    // },

  ];

  useEffect(() => {
    // Show all cards at once when section becomes visible
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Show all cards immediately
          setVisibleCards(activities.map((_, i) => i));
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

  const openModal = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
        {activities.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => openModal(item)}
            className={`bg-gradient-to-br md:bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-lg md:rounded-xl overflow-hidden border border-violet-500/30 hover:border-purple-400 transition-all duration-150 hover:scale-[1.02] hover:shadow-xl md:hover:shadow-2xl cursor-pointer transform ${
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
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/50 to-purple-900/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-violet-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="p-2 flex flex-col gap-1">
                <h3 className="text-xs font-bold text-white line-clamp-2 leading-tight flex items-center gap-1">
                  <span>{item.title}</span>
                  {item.hasJapanFlag && (
                    <svg className="w-3 h-2 inline-block flex-shrink-0" viewBox="0 0 900 600">
                      <rect fill="#ffffff" width="900" height="600"/>
                      <circle fill="#bc002d" cx="450" cy="300" r="180"/>
                    </svg>
                  )}
                </h3>
                <p className="text-violet-300 font-medium text-[10px] truncate">
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
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/50 to-purple-900/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-violet-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-5 flex flex-row items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2 flex-wrap">
                    <span>{item.title}</span>
                    {item.hasJapanFlag && (
                      <svg className="w-5 h-4 inline-block flex-shrink-0" viewBox="0 0 900 600">
                        <rect fill="#ffffff" width="900" height="600"/>
                        <circle fill="#bc002d" cx="450" cy="300" r="180"/>
                      </svg>
                    )}
                  </h3>
                  <p className="text-violet-300 font-medium text-base truncate">
                    {item.organization}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-gray-400 text-sm">{item.date}</span>
                  <div className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                    Activity
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Activity Details */}
      {selectedItem && createPortal(
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full max-h-[85vh] overflow-auto">
            {/* Activity Details Card */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden border border-violet-500/50 shadow-2xl relative"
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
                              idx === currentImageIndex ? "bg-violet-400" : "bg-white/50 hover:bg-white/70"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-violet-900/50 to-purple-900/50 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-violet-400 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <p className="text-violet-300 text-sm">No images available</p>
                  </div>
                </div>
              )}

              {/* Activity Details */}
              <div className="p-6 bg-gradient-to-r from-violet-900/50 to-purple-900/50">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 flex-wrap">
                  {selectedItem.title}
                  {selectedItem.hasJapanFlag && (
                    <svg className="w-6 h-5 inline-block" viewBox="0 0 900 600">
                      <rect fill="#ffffff" width="900" height="600"/>
                      <circle fill="#bc002d" cx="450" cy="300" r="180"/>
                    </svg>
                  )}
                </h3>
                <p className="text-violet-300 font-medium mb-4">
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
};

export default Extracurricular;
