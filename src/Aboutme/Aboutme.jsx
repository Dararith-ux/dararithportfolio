import React from "react";
import Lottie from "lottie-react";
import Title from "../assets/Title/Title";
import Rocket from "../assets/Rocket.json";
import Intro from "./Intro";
import Mypf from './Mypf'
const Aboutme = () => {
  return (
    <div className="h-[100vh]">
      <div className=" pt-20 flex flex-col items-center">
        <Title title="About me" />
        <div className="flex flex-row items-center justify-center gap-3 pt-2">
          <Lottie animationData={Rocket} style={{ width: "80px" }} />
          <p className="text-white text-lg font-normal">
            A tech-guy driven by curiosity, innovation, and an ideal passion for
            shaping the digital future.
          </p>
          <Lottie animationData={Rocket} style={{ width: "80px" }} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 justify-center items-center">
        <Intro />
        <Mypf/>
      </div>
    </div>
  );
};

export default Aboutme;
