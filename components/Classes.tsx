import Image from "next/image";
import React from "react";

const list = [
  {
    day: "Lunedì",
    title: "P.Yoga",
    timings: "7:00 A.M && 1:00 P.M",
  },
  {
    day: "Martedì",
    title: "P.Yoga",
    timings: "7:00 A.M && 1:00 P.M",
  },
  {
    day: "Mercoledì",
    title: "P.Yoga",
    timings: "7:00 A.M && 1:00 P.M",
  },
  {
    day: "Giovedì",
    title: "P.Yoga",
    timings: "7:00 A.M && 1:00 P.M",
  },
  {
    day: "Venerdì",
    title: "P.Yoga",
    timings: "7:00 A.M && 1:00 P.M",
  },
  {
    day: "Sabato",
    title: "P.Yoga",
    timings: "7:00 A.M && 1:00 P.M",
  },
];
const page = () => {
  return (
    <>
      <div className="w-full relative bg-gray-100">
        <Image
          width={1000}
          height={1000}
          alt="S"
          src="/assets/images/classes.png"
          className="w-full h-full object-contain   "
        />

        <div className="bg-black h-full opacity-50 z-10 left-0 top-0 absolute w-[50%]" />
        <div className="absolute left-10 top-10 sm:left-20 sm:top-20 z-10 sm:pt-10 w-[30%]">
          <h1 className="text-xl sm:text-3xl text-white"> Attività in linea</h1>
          <h2 className="text-lg sm:text-xl text-white">
            Attraverso piatteforme online - Zoom e Google Meet
          </h2>
        </div>
      </div>
      {/* 2nd part */}
      <div className=" flex w-full h-full  sm:h-[100vh] flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-[50%] lg:w-[70%] h-[100vh]  relative">
          <Image
            src="/assets/images/buddha.png"
            alt="Buddha"
            width={1000}
            height={1000}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="z-10 w-full  h-full absolute top-0 left-0 text-black flex flex-col justify-center items-center">
            <div className="flex-col flex justify-center items-center">
              <div className=" mt-2 justify-center items-center mx-3 md:mx-4">
                <h1 className=" text-2xl sm:text-3xl text-center">Orari</h1>
                <h1 className=" text-2xl sm:text-3xl text-center">
                  <i>Daci alcuni minuti a se stessa</i>
                </h1>
              </div>
            </div>
            <div className="w-full my-5">
              {list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex-col flex border-b border-gray-200 p-2 justify-center items-center w-full"
                  >
                    <div className="flex justify-between items-center w-[90%] md:w-[70%]">
                      <div>
                        <h1 className=" sm:text-xl lg:text-2xl">{item.day}</h1>
                        <h2 className="sm:text-lg lg:text-xl">
                          {item.timings}
                        </h2>
                      </div>
                      <h1 className=" sm:text-xl lg:text-2xl">{item.title}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[50%] lg:w-[30%] h-[90vh] sm:h-full bg-gray-300">
          <Image
            src="/assets/images/steps.png"
            alt="Steps"
            width={1000}
            height={1000}
            className="w-full h-full object-fill sm:object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default page;
