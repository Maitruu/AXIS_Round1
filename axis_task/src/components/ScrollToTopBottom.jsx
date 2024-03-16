"use client";
import ScrollToTop from "react-scroll-up";
import gif from "../assets/robotwave.gif";

export default function ScrollToTopButton() {
  return (
    <div className="relative z-[300] ">
      <ScrollToTop showUnder={40}>
        <img src={gif} alt="gif" className="w-20 sm:w-32 " />
      </ScrollToTop>
    </div>
  );
}
