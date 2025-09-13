import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animation.json";
const Right = () => {
  return (
    <div className="flex px-[150px] justify-center">
      <Lottie
        animationData={Animation}
        style={{
          width: "600px", // Adjust to your desired width
          height: "600px", // Adjust to your desired height
        }}
      />
    </div>
  );
};

export default Right;
