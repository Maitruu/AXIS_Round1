import React from "react";
import robogif from "../assets/robot-excited.gif";
import datagif from "../assets/analytics.gif";
import constructgif from "../assets/construct.gif";
import software from "../assets/software.gif";

const events = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl sm:text-6xl font-bold m-1">
          Events
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4">
        <div className="grid grids-cols-1 justify-items-center rounded-xl w-2/3 sm:w-3/4 bg-[url('https://www.niet.co.in/blog/wp-content/uploads/2020/09/robotics_Blog-1.jpg')] bg-cover backdrop-blur m-10 p-10">
          <img
            className=" rounded-full object-contain bg-white border-[#33415C] outine-2"
            src={robogif}
            alt=""
          />
          <div className="grid grid-cols-1 justify-items-center">
            <h1 className="font-semibold text-2xl sm:text-3xl text-center pt-5 text-white">
              Robotics & Automation
            </h1>

            <button className="w-36 h-12 text-center text-md rounded-full bg-[#002855] sm:text-xl text-white font-semibold mt-5">
              See more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center rounded-xl w-2/3 sm:w-3/4 bg-[url('https://www.dnv.com/siteassets/images/dtc---data-analytics-and-data-science_1000x500.jpg?width=1288')] bg-cover backdrop-blur m-10 p-10">
          <img
            className="sm:w-auto rounded-full object-contain bg-white border-[#33415C]"
            src={datagif}
            alt=""
          />
          <div className="grid grid-cols-1 justify-items-center">
            <h1 className="font-semibold text-2xl sm:text-3xl text-center pt-5 text-white">
              Management & Analytics
            </h1>

            <button className="w-36 h-12 text-center text-md rounded-full bg-[#002855] sm:text-xl text-white font-semibold mt-5">
              See more
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-1 justify-items-center rounded-xl gap-2 w-2/3 sm:w-3/4 bg-[url('https://online.stanford.edu/sites/default/files/styles/embedded_large/public/2020-03/virtual-design-construction_CEE341.jpg?itok=8anoz1_t')] bg-cover backdrop-blur m-10 p-10">
          <img
            className=" rounded-full object-contain bg-white border-[#33415C] outine-2"
            src={constructgif}
            alt=""
          />
          <div className="grid grid-cols-1 justify-items-center">
            <h1 className="font-semibold text-2xl sm:text-3xl text-center pt-5 text-white">
              Construction & Design
            </h1>

            <button className="w-36 h-12 text-center text-md rounded-full bg-[#002855] sm:text-xl text-white font-semibold mt-5">
              See more
            </button>
          </div>
        </div>

        <div className=" grid-cols-1 justify-items-center rounded-xl gap-2 w-2/3 sm:w-3/4 bg-[url('https://5.imimg.com/data5/IJ/GK/MY-8776595/pcb-design-services-500x500.jpg')] bg-cover backdrop-blur m-10 p-10">
          <img
            className="rounded-full object-contain bg-white border-[#33415C] outine-2"
            src={software}
            alt=""
          />
          <div className="grid grid-cols-1 justify-items-center">
            <h1 className="font-semibold text-2xl sm:text-3xl text-center pt-5 text-white">
              Software & Electronics
            </h1>

            <button className="w-36 h-12 text-center text-md rounded-full bg-[#002855] sm:text-xl text-white font-semibold mt-5">
              See more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default events;
