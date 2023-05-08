import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const HeroBanner = () => {
  return (
    <div className=" relative text-white text-[20px] w-full max-w-[1300px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className=" absolute w-[30px] md:w-[50px] h-[30px] md:h-[50px] flex justify-center items-center z-10 bottom-0 right-[31px] md:right-[51px] bg-black text-white hover:opacity-90"
          >
            <AiOutlineArrowLeft className=" text-sm md:text-2xl cursor-pointer" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className=" absolute w-[30px] md:w-[50px] h-[30px] md:h-[50px] flex justify-center items-center z-10 bottom-0 right-0 bg-black text-white hover:opacity-90"
          >
            <AiOutlineArrowRight className=" text-sm md:text-2xl cursor-pointer" />
          </div>
        )}
      >
        <div>
          <img
            src="/slide-2.png"
            alt=""
            className=" aspect-[16/10] md:aspect-auto object-cover"
          />
          <button className="absolute bottom-[25px] left-0 bg-white text-black px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald md:bottom-[75px] text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90 ">
            SHOP NOW
          </button>
        </div>
        <div>
          <img
            src="/slide-1.png"
            alt=""
            className=" aspect-[16/10] md:aspect-auto object-cover"
          />
          <button className="absolute bottom-[25px] left-0 bg-white text-black px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald md:bottom-[75px] text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90 ">
            SHOP NOW
          </button>
        </div>
        <div>
          <img
            src="/slide-3.png"
            alt=""
            className=" aspect-[16/10] md:aspect-auto object-cover"
          />
          <button className="absolute bottom-[25px] left-0 bg-white text-black px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald md:bottom-[75px] text-[15px] md:text-[30px] font-medium cursor-pointer hover:opacity-90 ">
            SHOP NOW
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
