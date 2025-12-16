import React from "react";
import Button from "../assets/Button/Button";
import Social from "../assets/Button/Social";
import { faFacebookF, faLinkedin, faLinkedinIn, faTelegram, faTelegramPlane, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Left = () => {
  return (
    <div className="flex px-4 md:px-8 lg:px-[150px] justify-center lg:justify-start">
      <div className="flex flex-col gap-3 md:gap-4 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
          Frontend
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
          Developer
        </h1>

        <div className="flex flex-col gap-1 py-2">
          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white">
            Information Techonology Management
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white">Computer Science</p>
        </div>
        <div className="flex flex-row gap-3 md:gap-5 justify-center lg:justify-start">
          <Button labels="Project" />
          <Button labels="Contacts" />
        </div>
        <div className="flex flex-row gap-3 md:gap-5 justify-center lg:justify-start">
          <Social app={faFacebookF}/>
          <Social app={faTiktok}/>
          <Social app={faTelegramPlane}/>
          <Social app={faXTwitter}/>
          <Social app={faLinkedinIn}/>
        </div>
      </div>
    </div>
  );
};

export default Left;
