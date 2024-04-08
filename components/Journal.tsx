"use client";
import CircularProgress from "@components/sharedComponents/CircularProgress";
import React, { Suspense, useRef, useState } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const imagesPeopleYoga = [
  { picture: "/assets/videos/yoga1.mp4" },
  { picture: "/assets/videos/yoga5.mp4" },
  { picture: "/assets/videos/yoga2.mp4" },
  { picture: "/assets/videos/yoga3.mp4" },
  { picture: "/assets/videos/yoga4.mp4" },
];

const Journal = () => {
  const [isPlaying, setIsPlaying] = useState(imagesPeopleYoga.map(() => false));
  const [isHovered, setIsHovered] = useState(imagesPeopleYoga.map(() => false));
  const refs = imagesPeopleYoga.map(() => useRef<HTMLVideoElement>(null));

  const handlePlay = (index: number) => {
    setIsPlaying((prev) => {
      const updatedState = [...prev];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });

    const videoRef = refs[index].current;

    if (videoRef) {
      if (isPlaying[index]) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    setIsHovered((prev) => {
      const updatedState = [...prev];
      updatedState[index] = true;
      return updatedState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setIsHovered((prev) => {
      const updatedState = [...prev];
      updatedState[index] = false;
      return updatedState;
    });
  };

  return (
    <section>
      <div className="w-full h-[40vh] sm:h-[60vh] md:h-full">
        <Suspense fallback={<CircularProgress />}>
          <video muted autoPlay className="w-full object-fill h-full">
            <source src="/assets/videos/YOGA.mp4" type="video/mp4" />
          </video>
        </Suspense>
      </div>
      <div className="mx-10 mt-10 flex flex-col justify-center items-center">
        <p className="mx-10 mt-10">
          Come praticante dedicato dello yoga, l'integrazione del pranayama
          nella mia routine quotidiana ha trasformato profondamente la mia vita.
          Il pranayama, spesso definito come il controllo o la regolazione del
          respiro, è un aspetto fondamentale della pratica dello yoga che si
          concentra sulle tecniche di respirazione consapevole. La mia vita è
          cambiata completamente, così come in quella di molti altri.
        </p>
        <h1 className="mx-10 text-center font-bold mt-5 mb-2">
          Experienza dei clienti:
        </h1>
        <div className="flex flex-col justify-center items-end">
          <h2 className="mx-10 text-center">
            <i> "Meno stress, più pace: grazie al pranayama yoga."</i>
          </h2>
          <h2 className="mx-10 text-center">da Sana</h2>
        </div>
        <div className="flex flex-col justify-center items-end">
          <h2 className="mx-10 text-center">
            <i> "Daily pranayama: my daily dose of inner calm."</i>
          </h2>
          <h2 className="mx-10 text-center">da Nancy</h2>
        </div>
      </div>
      <div className="p-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {imagesPeopleYoga.map((item, index) => (
          <div
            key={index}
            className={`sm:my-2 w-full  relative h-[250px] sm:h-[200px] lg:h-[250px]`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Suspense fallback={<CircularProgress />}>
              <video
                muted
                className="w-full object-cover h-full rounded-lg"
                ref={refs[index]}
              >
                <source src={item.picture} type="video/mp4" />
              </video>
            </Suspense>

            {isHovered[index] && (
              <button
                onClick={() => handlePlay(index)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                {isPlaying[index] ? (
                  <FaPause className="text-lg text-white" />
                ) : (
                  <FaPlay className="text-lg text-white" />
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journal;
