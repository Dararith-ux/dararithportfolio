import React from "react";
import Logo from "./Logo";
const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <ul className="px-10 list-unstyled text-white flex gap-10 font-semibold text-lg">
        <li className="cursor-pointer hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500">
          Home
        </li>
        <li className="cursor-pointer hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500">
          About me
        </li>
        <li className="cursor-pointer hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500">
          Academic
        </li>
        <li className="cursor-pointer hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500">
          Experience
        </li>
        <li className="cursor-pointer hover:text-gray-500 border-b-2 border-transparent hover:border-gray-500">
          Project
        </li>
      </ul>
    </div>
  );
};

export default Nav;
