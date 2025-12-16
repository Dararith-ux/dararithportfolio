import React, { useState, useEffect } from "react";
import Button from "../assets/Button/Button";
import MYCV from "../assets/DararithCV.pdf";
import { faDownload, faFile } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  const phrases = [
    "Dararith Piseth",
    "a Web Developer",
    "passionate in Web Design",
    "a Tech Enthusiast",
    "a Problem Solver"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
          setTypingSpeed(80);
        } else {
          // Pause at the end before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  return (
    <div className="flex flex-col pt-8 md:pt-12 lg:pt-20 px-4 md:px-8 lg:px-[150px]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
        Hello, I am
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase pt-2 md:pt-3 min-h-[3rem] md:min-h-[4rem]">
        {displayedText}
        <span className="animate-pulse">|</span>
      </h1>
      <p className="text-gray-300 font-normal text-base md:text-lg lg:text-xl pt-3 md:pt-4">
        I'm a dedicated Computer Science student at AUPP with a passion for
        technology, leadership, community development, and cultural exchange. I
        learn quickly, solve problems creatively, and thrive in dynamic
        environments. I always give my best, support my team, and aim to make
        a meaningful impact.
      </p>
      <div className="pt-3 md:pt-4">
        <a href={MYCV} download="DararithCV.pdf">
          <Button labels="Download CV" icons={faFile}/>
        </a>
      </div>
    </div>
  );
};

export default Intro;
