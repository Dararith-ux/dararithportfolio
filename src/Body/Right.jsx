import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animation.json";
const Right = () => {
  return (
    <div className="flex px-4 md:px-8 lg:px-[150px] justify-center">
      <Lottie
        animationData={Animation}
        className="w-64 h-64 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px]"
      />
    </div>
  );
};

export default Right;
