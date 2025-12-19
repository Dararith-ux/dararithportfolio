import React, { useState, useEffect, useRef } from "react";
import ReactCert from "../assets/Certificate/React.jpg";
import PythonGettingStart from "../assets/Certificate/Gettingstartwithpython.jpg";
import PythonWebData from "../assets/Certificate/pythonaccessweb.jpg";
import PythonDataStructures from "../assets/Certificate/pythondatastructure.jpg";
import awscloud from "../assets/Certificate/cloud.jpg";
const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const certificates = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Completion",
      issuer: "C4C Cambodia",
      date: "2024",
      verifyLink: "#", // Replace with actual verification link
      thumbnail: awscloud,
      fullImage: awscloud,
      rotate: true, // Rotate 90 degrees clockwise
    },
    {
      id: 2,
      title: "Meta React Basic",
      issuer: "Meta / Coursera",
      date: "2025",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/BYWZH1DTBM4N",
      thumbnail: ReactCert,
      fullImage: ReactCert,
    },
    {
      id: 3,
      title: "Python for Everybody (Getting Start with Python)",
      issuer: "University of Michigan / Coursera",
      date: "2024",
      verifyLink: "https://coursera.org/share/f105576ffed0a05af036bf568beb9403", // Replace with actual verification link
      thumbnail: PythonGettingStart,
      fullImage: PythonGettingStart,
    },
    {
      id: 4,
      title: "Using Python Accessing Web Data",
      issuer: "University of Michigan / Coursera",
      date: "2024",
      verifyLink: "https://coursera.org/share/b0c236ce65486b4913bd860f72cfdb85", // Replace with actual verification link
      thumbnail: PythonWebData,
      fullImage: PythonWebData,
    },
    {
      id: 5,
      title: "Python Data Structures",
      issuer: "University of Michigan / Coursera",
      date: "2024",
      verifyLink: "https://coursera.org/share/75fdb99a50d1d68d351934934e0b4eca", // Replace with actual verification link
      thumbnail: PythonDataStructures,
      fullImage: PythonDataStructures,
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

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => openModal(cert)}
            className={`bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl overflow-hidden border border-blue-500/30 hover:border-cyan-400 transition-all duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer transform ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Thumbnail Image */}
            <div className="relative h-48 bg-gray-800/50 overflow-hidden flex items-center justify-center">
              <img
                src={cert.thumbnail}
                alt={cert.title}
                className={`${cert.rotate ? "rotate-90 min-w-[100%] min-h-[100%] object-cover" : "w-full h-full object-cover"}`}
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23374151' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='20' fill='%239CA3AF'%3ECertificate%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              <div className="absolute top-2 right-2 bg-cyan-500/80 text-white px-2 py-1 rounded text-xs font-bold">
                📜 Certificate
              </div>
            </div>

            {/* Certificate Info */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-cyan-300 font-medium text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-xs">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Certificate Image */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full max-h-[85vh] overflow-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-cyan-400 transition-colors z-10"
            >
              ✕
            </button>

            {/* Certificate Image Card */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-cyan-500/50 shadow-2xl">
              <img
                src={selectedCert.fullImage}
                alt={selectedCert.title}
                className={`w-full h-auto max-h-[60vh] object-contain ${selectedCert.rotate ? "rotate-90" : ""}`}
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23374151' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='24' fill='%239CA3AF'%3ECertificate Image%3C/text%3E%3C/svg%3E";
                }}
              />

              {/* Certificate Details */}
              <div className="p-6 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-cyan-300 font-medium mb-2">{selectedCert.issuer}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-300">
                    <span className="text-gray-400">Date:</span> {selectedCert.date}
                  </p>
                  <a
                    href={selectedCert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Verify Certificate
                  </a>
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

export default Certificates;
