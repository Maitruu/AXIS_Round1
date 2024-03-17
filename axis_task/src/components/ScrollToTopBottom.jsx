"use client";
import ScrollToTop from "react-scroll-up"; //using react library 'react scroll up'
import gif from "../assets/robotwave.gif";// size issues

export default function ScrollToTopButton() {
  return (
    <div className="relative z-[300] ">
        {/* setting the visibility of the icon when 40 px height is scrolled down */}
      <ScrollToTop showUnder={40}>
        <img src={gif} alt="gif" className="w-20 sm:w-32 " />
      </ScrollToTop>
    </div>
  );
}
