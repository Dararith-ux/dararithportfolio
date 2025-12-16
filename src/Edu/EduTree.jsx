import React, { useState } from "react";

const EduTree = () => {
  const [expandedBranches, setExpandedBranches] = useState({});

  const toggleBranch = (branchId) => {
    setExpandedBranches((prev) => ({
      ...prev,
      [branchId]: !prev[branchId],
    }));
  };

  const educationData = [
    {
      id: 1,
      level: "University",
      institution: "American University of Phnom Penh",
      degree: "Bachelor",
      field: "Computer Science / Information Technology Management",
      period: "2024 - 2027",
      description: "Dual Degree Program with Fort Hays State University, USA",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      level: "High School",
      institution: "Hun Sen Kampong Phnom High School",
      degree: "High School Diploma",
      field: "GenEd / Science / Math / Physics",
      period: "2020 - 2023",
      description: "competed in various academic competitions includeding Math Olympiad, National Outstanding Student Exam in Physics.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      level: "Certifications",
      institution: "USAID / Meta / University of Michigan",
      degree: "Association Certificate",
      field: "Web Development / Cloud Computing / Data Science",
      period: "From 2024",
      description: "AWS Cloud Practitioner, Meta Front-End Developer with React, Python for Everybody",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      level: "Online Courses",
      institution: "Coursera",
      degree: "Course Completion",
      field: "Front-end / Python in Data Science / Cloud Computing",
      period: "2024 - Present",
      description: "Python for Everybody, Meta Front-End Developer with React, AWS Cloud Practitioner",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      level: "Bootcamps",
      institution: "Junior Leadership Academy",
      degree: "Intensive Training",
      field: "Leadership Development / Soft Skills",
      period: "2025 (January - September)",
      description: "Intensive leadership development program by JCI focusing on personal growth, community impact, and developing future leaders through hands-on training and real-world projects.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      level: "Self-Learning Projects",
      institution: "Independent Study",
      degree: "Self-Taught",
      field: "Programming / Design / DevOps",
      period: "Ongoing",
      description: "Add your self-learning journey here",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
      {/* Roadmap Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Start Node */}
        <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full shadow-2xl text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">🎓 Education Journey</h2>
            <p className="text-xs md:text-sm mt-1 md:mt-2">Click to explore each milestone</p>
          </div>
        </div>

        {/* Vertical Timeline Line - Center on all screens */}
        <div className="absolute left-1/2 top-32 lg:top-40 bottom-20 w-1 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-700 transform -translate-x-1/2"></div>

        {/* Roadmap Items - Centered on mobile, Alternating on desktop */}
        <div className="space-y-6 md:space-y-12">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={edu.id}
                className="relative flex items-center justify-center md:justify-between"
              >
                {/* Mobile Layout - Centered with node in middle */}
                <div className="md:hidden w-full max-w-md">
                  <div className="relative flex flex-col items-center">
                    {/* Timeline Node */}
                    <div className="relative mb-4">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${edu.color} shadow-xl border-2 border-white z-10`}></div>
                      <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br ${edu.color} animate-ping opacity-40`}></div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full px-4">
                      <div
                        className={`relative bg-gradient-to-br ${edu.color} rounded-xl shadow-2xl p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                        onClick={() => toggleBranch(edu.id)}
                      >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white opacity-10 rounded-bl-full"></div>

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-white">{edu.level}</h3>
                            <button className="text-white text-2xl font-bold">
                              {expandedBranches[edu.id] ? "−" : "+"}
                            </button>
                          </div>

                          <div className="text-white text-opacity-95 space-y-2">
                            <p className="font-bold text-base">{edu.institution}</p>
                            <p className="text-xs opacity-90">{edu.period}</p>

                            {expandedBranches[edu.id] && (
                              <div className="mt-3 space-y-2 animate-fadeIn">
                                <div className="border-t border-white border-opacity-40 pt-2">
                                  <p className="text-xs font-medium">
                                    <span className="opacity-80">Degree:</span> {edu.degree}
                                  </p>
                                  <p className="text-xs font-medium mt-2">
                                    <span className="opacity-80">Field:</span> {edu.field}
                                  </p>
                                  <p className="text-xs mt-2 italic opacity-95 leading-relaxed">
                                    {edu.description}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Emoji Decoration */}
                        <div className="absolute bottom-2 right-2 text-white text-opacity-30 text-3xl">
                          {index === 0 ? "🎓" : index === 2 ? "📜" : index === 4 ? "🚀" : "🌟"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Alternating Left and Right */}
                {isLeft ? (
                  <>
                    <div className="hidden md:block w-[45%]">
                      <div
                        className={`relative bg-gradient-to-br ${edu.color} rounded-2xl shadow-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1`}
                        onClick={() => toggleBranch(edu.id)}
                      >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-bl-full"></div>

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold text-white">{edu.level}</h3>
                            <button className="text-white text-3xl font-bold">
                              {expandedBranches[edu.id] ? "−" : "+"}
                            </button>
                          </div>

                          <div className="text-white text-opacity-95 space-y-2">
                            <p className="font-bold text-lg">{edu.institution}</p>
                            <p className="text-sm opacity-90">{edu.period}</p>

                            {expandedBranches[edu.id] && (
                              <div className="mt-4 space-y-2 animate-fadeIn">
                                <div className="border-t border-white border-opacity-40 pt-3">
                                  <p className="text-sm font-medium">
                                    <span className="opacity-80">Degree:</span> {edu.degree}
                                  </p>
                                  <p className="text-sm font-medium mt-2">
                                    <span className="opacity-80">Field:</span> {edu.field}
                                  </p>
                                  <p className="text-sm mt-3 italic opacity-95 leading-relaxed">
                                    {edu.description}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Emoji Decoration */}
                        <div className="absolute bottom-3 right-3 text-white text-opacity-30 text-5xl">
                          {index === 0 ? "🎓" : index === 2 ? "📜" : index === 4 ? "🚀" : "🌟"}
                        </div>
                      </div>

                      {/* Connecting Line to Timeline */}
                      <div className="absolute left-[45%] top-1/2 w-[5%] h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${edu.color} shadow-xl border-4 border-white`}></div>
                        <div className={`absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br ${edu.color} animate-ping opacity-40`}></div>
                      </div>
                    </div>

                    {/* Right Side Empty */}
                    <div className="w-[45%]"></div>
                  </>
                ) : (
                  <>
                    {/* Left Side Empty */}
                    <div className="w-[45%]"></div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${edu.color} shadow-xl border-4 border-white`}></div>
                        <div className={`absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br ${edu.color} animate-ping opacity-40`}></div>
                      </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="w-[45%]">
                      <div
                        className={`relative bg-gradient-to-br ${edu.color} rounded-2xl shadow-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1`}
                        onClick={() => toggleBranch(edu.id)}
                      >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-bl-full"></div>

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold text-white">{edu.level}</h3>
                            <button className="text-white text-3xl font-bold">
                              {expandedBranches[edu.id] ? "−" : "+"}
                            </button>
                          </div>

                          <div className="text-white text-opacity-95 space-y-2">
                            <p className="font-bold text-lg">{edu.institution}</p>
                            <p className="text-sm opacity-90">{edu.period}</p>

                            {expandedBranches[edu.id] && (
                              <div className="mt-4 space-y-2 animate-fadeIn">
                                <div className="border-t border-white border-opacity-40 pt-3">
                                  <p className="text-sm font-medium">
                                    <span className="opacity-80">Degree:</span> {edu.degree}
                                  </p>
                                  <p className="text-sm font-medium mt-2">
                                    <span className="opacity-80">Field:</span> {edu.field}
                                  </p>
                                  <p className="text-sm mt-3 italic opacity-95 leading-relaxed">
                                    {edu.description}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Emoji Decoration */}
                        <div className="absolute bottom-3 right-3 text-white text-opacity-30 text-5xl">
                          {index === 1 ? "📚" : index === 3 ? "💻" : index === 5 ? "🌟" : "🚀"}
                        </div>
                      </div>

                      {/* Connecting Line to Timeline */}
                      <div className="absolute right-[45%] top-1/2 w-[5%] h-0.5 bg-gradient-to-l from-amber-500 to-amber-600"></div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* End Node */}
        <div className="flex justify-center mt-20">
          <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white px-8 py-4 rounded-full shadow-2xl">
            <p className="text-xl font-bold">✨ Continuous Learning Journey ✨</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EduTree;
