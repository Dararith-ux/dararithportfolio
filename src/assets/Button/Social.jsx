import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Social = ({ app, href = "#" }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#000318] hover:bg-gray-700 text-xl cursor-pointer text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-[50px] h-[50px] flex items-center justify-center"
      >
        <FontAwesomeIcon icon={app}/>
      </a>
    </div>
  );
};

export default Social;
