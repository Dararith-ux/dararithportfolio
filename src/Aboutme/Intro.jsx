import React from "react";
import Button from "../assets/Button/Button";
import MYCV from "../assets/DararithCV.pdf";
import { faDownload, faFile } from "@fortawesome/free-solid-svg-icons";
const Intro = () => {
  return (
    <div className="flex flex-col pt-20 px-[150px]">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
        Hello, I am
      </h1>
      <h1 className="text-5xl font-bold text-white uppercase pt-3">
        Dararith Piseth
      </h1>
      <p className="text-gray-300 font-normal text-xl pt-4">
        I’m a dedicated Computer Science student at AUPP with a passion for
        technology, leadership,community development, and cultural exchange. I
        learn quickly, solve problems creatively, andthrive in dynamic
        environments. I always give my best, support my team, and aim to make
        ameaningful impact.
      </p>
      <div className="pt-4">
        <a href={MYCV} download="DararithCV.pdf">
          <Button labels="Download CV" icons={faFile}/>
        </a>
      </div>
    </div>
  );
};

export default Intro;
