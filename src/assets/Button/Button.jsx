import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Button = ({ labels, icons }) => {
  return (
    <div>
      <button className="bg-[#000318] hover:bg-gray-700 text-xl cursor-pointer text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-[200px] h-[50px]">
        {icons && <FontAwesomeIcon icon={icons}/>} {labels}
      </button>
    </div>
  );
};

export default Button;
