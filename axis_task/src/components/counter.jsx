import React from "react";
import NumberCounter from "number-counter";
import events from "../assests/n2.png";
import college from "../assests/a2.png";
import footfall from "../assests/c2.png";
import prize from "../assests/download2.png";

const counter = () => {
  return (
    <>
      <div className="sm:flex gap-5 justify-evenly p-16 text-lg grid grid-cols-1 justify-items-center bg-[#979DAC]">
        <div className="grid grid-cols-1 bg-[#979DAC] w-48 h-48 justify-items-center p-5 rounded-lg font-semibold shadow-[0_35px_60px_-15px_rgba(0,24,69,48)]">
          <img src={events} alt="Events" width={80} />
          <span>
            <NumberCounter end={35} start={4} delay="4" postFix="+" />
          </span>
          <span>EVENTS</span>
        </div>
        <div className="grid grid-cols-1 bg-[#979DAC] w-48 h-48 justify-items-center p-5 rounded-lg font-semibold shadow-[0_35px_60px_-15px_rgba(0,24,69,48)]">
          <span>
            <img src={college} alt="Events" width={80} />
            <NumberCounter end={200} start={27} delay="4" postFix="+" />
          </span>
          <span>COLLEGES</span>
        </div>
        <div className="grid grid-cols-1 bg-[#979DAC] w-48 h-48 justify-items-center p-5 rounded-lg font-semibold shadow-[0_35px_60px_-15px_rgba(0,24,69,48)]">
          <span>
            <img src={footfall} alt="Events" width={80} />
            <NumberCounter end={25000} start={1000} delay="4" postFix="+" />
          </span>
          <span>FOOTFALLS</span>
        </div>
        <div className="grid grid-cols-1 bg-[#979DAC] w-48 h-48 justify-items-center p-5 rounded-lg font-semibold shadow-[0_35px_60px_-15px_rgba(0,24,69,48)]">
          <span>
            <img src={prize} alt="prize" width={80} />
            <NumberCounter end={100} start={10} delay="4" postFix="K+" />
          </span>
          <span>PRIZES WORTH</span>
        </div>
      </div>
    </>
  );
};

export default counter;
