import React from "react";
import Button from "../Button/Button";
const Left = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
          Frontend
        </h1>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
          Developer
        </h1>

        <div className="flex flex-col gap-1 py-2">
          <p className="text-3xl font-medium text-white ">
            Information Techonology Management
          </p>
          <p className="text-3xl font-medium text-white "> Computer Science</p>
        </div>
        <div className="flex flex-row gap-5">
          <Button labels="Project" />
          <Button labels="Contacts" />
        </div>
      </div>
    </div>
  );
};

export default Left;
