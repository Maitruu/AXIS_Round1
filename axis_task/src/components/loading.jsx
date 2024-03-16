import React from "react";
import gif from "../assets/o2-bubl.gif"; //importing gif 

const loading = () => {
  return (
    <>
      <div className="h-screen bg-black flex justify-center place-items-center">
        <div className="flex-column">
          <img src={gif} alt="gif" width={200} />
        </div>
        <div>
          <p className="text-white font-poppins text-2xl">
            Hello, Welcome to the Official Website of AXIS'24: <br /> AN ENIGMATIC
            RENAISSANCE
          </p>
        </div>
      </div>
    </>
  );
};

export default loading;
