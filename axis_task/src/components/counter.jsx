import React from "react";
import NumberCounter from "number-counter";
import events from '../assests/n.png';
import college from'../assests/a.png';
import footfall from '../assests/c.png';

const counter = () => {
  return (
    <>
      <div className="flex gap-5 justify-evenly py-6text-lg">
        <div className="flex-column">
          <img src={events} alt="Events" width={50}/>
          <span>
            <NumberCounter end={35} start={4} delay="4" postFix="+" />
          </span>
          <span>EVENTS</span>
        </div>
        <div>
          <span>
          <img src={college} alt="Events" width={67}/>
            <NumberCounter end={200} start={27} delay="4" postFix="+" />
          </span>
          <span>COLLEGES</span>
        </div>
        <div>
          <span>
          <img src={footfall} alt="Events" width={50}/>
            <NumberCounter end={25000} start={1000} delay="4" postFix="+" />
          </span>
          <span>FOOTFALL</span>
        </div>
      </div>
    </>
  );
};

export default counter;