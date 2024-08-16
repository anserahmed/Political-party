import React from "react";
import { Carousel } from "flowbite-react";
import carousel from "../assets/carousel.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";

function LandingPage() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-[80vh] 2xl:h-[100vh]">
        <Carousel>
          <img src={carousel} alt="..." />
          <img src={carousel1} alt="..." />
          <img src={carousel2} alt="..." />
      
        </Carousel>
      </div>
      <div className="h-screen bg-black"></div>
    </>
  );
}

export default LandingPage;
