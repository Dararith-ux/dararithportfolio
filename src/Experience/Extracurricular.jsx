import React, { useState, useEffect, useRef } from "react";

const Extracurricular = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const activities = [
    {
      id: 1,
      title: "Example Activity 1",
      organization: "Organization Name",
      date: "2024",
      description: "Description of your extracurricular activity goes here. Explain your role and contributions.",
      thumbnail: null, // Replace with actual thumbnail image import
      images: [], // Array of certificate/activity images
    },
    {
      id: 2,
      title: "Example Activity 2",
      organization: "Organization Name",
      date: "2024",
      description: "Description of your extracurricular activity goes here. Explain your role and contributions.",
      thumbnail: null,
      images: [],
    },
    {
      id: 3,
      title: "Example Activity 3",
      organization: "Organization Name",
      date: "2023",
      description: "Description of your extracurricular activity goes here. Explain your role and contributions.",
      thumbnail: null,
      images: [],
    },
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
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
      <div className="flex flex-col gap-4">
        {activities.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => openModal(item)}
            className={`bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-xl overflow-hidden border border-violet-500/30 hover:border-purple-400 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl cursor-pointer transform ${
              visibleCards.includes(index)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Thumbnail */}
              <div className="w-full md:w-48 h-32 md:h-auto bg-gray-800/50 flex-shrink-0 overflow-hidden">
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
              <div className="flex-1 p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-violet-300 font-medium text-sm md:text-base">
                    {item.organization}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm">{item.date}</span>
                  <div className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-xs font-bold">
                    Activity
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Activity Details */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full max-h-[85vh] overflow-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-violet-400 transition-colors z-10"
            >
              ✕
            </button>

            {/* Activity Details Card */}
            <div
              className="bg-gray-900 rounded-xl overflow-hidden border border-violet-500/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
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
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedItem.title}
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
        </div>
      )}
    </>
  );
};

export default Extracurricular;
