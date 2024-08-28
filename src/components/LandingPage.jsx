import React from "react";
import { Carousel } from "flowbite-react";
import carousel from "../assets/carousel.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";

function LandingPage() {
  return (
    <>
    
      {/* Alag hai */}

      <div className="h-[58vh] sm:h-[60vh]  md:h-[65vh]  xl:h-[90vh] 2xl:h-[100vh] relative">
        <Carousel className="">
          {[carousel, carousel1, carousel2].map((src, index) => (
            <div className="relative w-full h-full" key={index}>
              <img
                src={src}
                className="w-full bg-slate-900 brightness-50 h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
        <div className="absolute flex-col myfont flex left-0 lg:bottom-40 bottom-20 lg:h-20 md:h-10 h-5 gap-0 min-w-full bg-opacity-50 text-center">
          <p className="text-white oxygen-bold text-2xl h-full m-0 md:text-5xl lg:text-7xl ">
            Rajendra Mahato
          </p>
          <p className=" text-orange-400 oxygen-light lg:text-5xl text-lg md:text-3xl p-2 font-sm ">
            President
          </p>
        </div>
      </div>

      <div className="h-screen bg-black"></div>
    </>
  );
}

export default LandingPage;
