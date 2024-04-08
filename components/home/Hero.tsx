import React, { Suspense } from "react";
import CircularProgress from "../sharedComponents/CircularProgress";

const Hero = () => {
  return (
    <div className="relative w-full">
      <Suspense fallback={<CircularProgress />}>
        <video muted autoPlay loop className="w-full ">
          <source src="/assets/videos/sit.mp4" type="video/mp4" />
        </video>
      </Suspense>
      <div className="w-full  hidden md:flex lg:hidden justify-center items-center absolute -bottom-6">
        <a href="#about">
          <div className="w-[32px] h-[61px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-[#8B4513] flex justify-center items-start ">
            <div className="rounded-full bg-[#8B4513] w-[0.6rem] h-[0.6rem] sm:w-3 sm:h-3 child-color-animation" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
