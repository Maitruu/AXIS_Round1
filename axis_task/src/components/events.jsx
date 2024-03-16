import React from "react";
import robogif from "../assets/robot-excited.gif";
import datagif from "../assets/analytics.gif";
import constructgif from "../assets/construct.gif";
import software from "../assets/software.gif";

const events = () => {
  return (
    <>
      <div className="bg-[url('https://i.pinimg.com/originals/62/26/43/6226435516042edfe1a4514a44e2023a.gif')] bg-no-repeat bg-cover p-2">
        <h1 className="text-center text-3xl sm:text-5xl font-bold text-white">
          Events
        </h1>

        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 m-10">
          <div className="grid grids-cols-1 justify-items-center rounded-xl m-5 w-2/3 lg:h-3/4 sm:w-3/4 bg-[url('https://www.niet.co.in/blog/wp-content/uploads/2020/09/robotics_Blog-1.jpg')] bg-cover p-10 shadow-[0_35px_60px_-15px_rgba(77,77,255,48)] ">
            <img
              className="sm:w-2/3 rounded-full object-contain bg-white border-[#33415C]  transition-all duration-300 delay-100"
              src={robogif}
              alt=""
            />
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="animate-pulse font-semibold text-xl sm:text-2xl text-center pt-8 text-white">
                Robotics & Automation
              </h1>

              <button className="animate-bounce w-24 h-8 md:w-36 md:h-12 text-center text-sm rounded-full bg-[#002855] sm:text-md text-white font-semibold mt-5">
                See more
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-items-center rounded-xl w-2/3 lg:h-3/4 sm:w-3/4 bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-web-banner-3d-rendered-ui-for-seo-data-analytics-and-future-image_3618751.jpg')] bg-cover m-5 p-10 shadow-[0_35px_60px_-15px_rgba(77,77,255,48)]">
            <img
              className="sm:w-2/3 rounded-full object-contain bg-white border-[#33415C]  transition-all duration-300 delay-100"
              src={datagif}
              alt=""
            />
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="animate-pulse font-semibold text-xl sm:text-2xl text-center pt-8 text-white">
                Management & Analytics
              </h1>

              <button className="animate-bounce w-24 h-8 md:w-36 md:h-12 text-center text-sm rounded-full bg-[#002855] sm:text-md text-white font-semibold mt-5">
                See more
              </button>
            </div>
          </div>

          <div className=" grid grid-cols-1 justify-items-center rounded-xl gap-2 w-2/3 lg:h-3/4 sm:w-3/4 bg-[url('https://wallpapers.com/images/hd/construction-background-7t8pzcrvkc42exlu.jpg')] bg-cover m-5 p-10 shadow-[0_35px_60px_-15px_rgba(77,77,255,48)]">
            <img
              className=" sm:w-2/3 rounded-full object-contain bg-white border-[#33415C]  transition-all duration-300 delay-100"
              src={constructgif}
              alt=""
            />
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="animate-pulse font-semibold text-xl sm:text-2xl text-center pt-5 text-white">
                Construction & Design
              </h1>

              <button className="animate-bounce w-24 h-8 md:w-36 md:h-12 text-center text-sm rounded-full bg-[#002855] sm:text-md text-white font-semibold mt-5">
                See more
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-items-center rounded-xl gap-2 w-2/3 lg:h-3/4 sm:w-3/4 bg-[url('https://5.imimg.com/data5/IJ/GK/MY-8776595/pcb-design-services-500x500.jpg')] bg-cover m-5 p-10 shadow-[0_35px_60px_-15px_rgba(77,77,255,48)]">
            <img
              className="sm:w-2/3 rounded-full object-contain bg-white border-[#33415C]  transition-all duration-300 delay-100"
              src={software}
              alt=""
            />
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="animate-pulse font-semibold text-xl sm:text-2xl text-center pt-5 text-white">
                Software & Electronics
              </h1>

              <button className="animate-bounce w-24 h-8 md:w-36 md:h-12 text-center text-sm rounded-full bg-[#002855] sm:text-md text-white font-semibold mt-5">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default events;
