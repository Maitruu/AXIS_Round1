"use client"
import ScrollToTop from "react-scroll-up";
import gif from '../assests/image.imageformat.text50percent.1562089386.gif';

export default function ScrollToTopButton(){
    return(
        <div className="relative z-[300] ">
            <ScrollToTop showUnder={50}>
                <img src={gif} alt="gif" className="w-24 -rotate-90"/>
            </ScrollToTop>
        </div>
    )
}

