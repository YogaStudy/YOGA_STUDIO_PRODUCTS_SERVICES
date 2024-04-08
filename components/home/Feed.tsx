import Image from "next/image";
import React, { Suspense } from "react";
import CircularProgress from "../sharedComponents/CircularProgress";
const imagesPeopleYoga0 = [
  { picture: "/assets/images/3.png" },
  { picture: "/assets/images/2.png" },
  { picture: "/assets/images/1.png" },
];

const Feed = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col-reverse md:flex-row justify-between items-center my-5 md:mt-16 mb-0 md:mb-10 w-full px-0 sm:px-10"
      >
        <div className="my-6 md:my-0 h-full w-full md:w-[50%] p-4 md:p-6 lg:p-10">
          <p className="font-family text-xl sm:text-md lg:text-2xl leading-6">
            Pranayama si concentra sull'utilizzo del respiro per migliorare il
            benessere fisico, mentale e spirituale. Nel vasto tessuto dello
            yoga, il pranayama funge da ponte tra il corpo e la mente, un
            condotto per bilanciare e armonizzare la forza vitale che anima il
            nostro essere.
          </p>
          <p className="font-family text-xl sm:text-md lg:text-2xl leading-6 mt-4">
            Il respiro è considerato uno strumento potente per
            l'autoregolazione, offrendo un percorso diretto per influenzare il
            sistema nervoso autonomo.
          </p>
        </div>
        <div className="h-[40vh] sm:h-[60vh] md:h-full w-full md:w-[50%]  flex justify-center items-center">
          <Image
            priority
            src="/assets/images/intro.png"
            alt="yogoIntro"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full h-[50vh] sm:h-full">
        <Suspense fallback={<CircularProgress />}>
          <video muted autoPlay loop className="w-full h-full object-fill">
            <source src="/assets/videos/intro.mp4" type="video/mp4" />
          </video>
        </Suspense>
      </div>
      <div className="w-full hidden sm:flex justify-center items-center ">
        <div className={`w-[60%] h-[601px] mt-2`}>
          <Suspense fallback={<CircularProgress />}>
            <Image
              alt="ss"
              src="/assets/images/3.png"
              className="w-full h-full object-cover"
              height={1000}
              width={1000}
            />
          </Suspense>
        </div>
        <div className={`flex-col flex w-[40%] h-[600px]`}>
          <div className={` w-[100%] h-[299px] mt-1 ml-2`}>
            <Suspense fallback={<CircularProgress />}>
              <Image
                alt="ss"
                src="/assets/images/2.png"
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </Suspense>
          </div>
          <div className={`w-[100%] h-[299px] mt-1 ml-2`}>
            <Suspense fallback={<CircularProgress />}>
              <Image
                src="/assets/images/1.png"
                alt="s"
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </Suspense>
          </div>
        </div>
      </div>
      <div className=" w-[100%] h-[50%] flex flex-col sm:hidden justify-center  items-center gap-0 sm:gap-2">
        {imagesPeopleYoga0.map((item, index) => {
          return (
            <div
              key={index}
              className={`my-2 w-[100%] h-[50vh]`}
              style={{
                backgroundImage: `url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Feed;
