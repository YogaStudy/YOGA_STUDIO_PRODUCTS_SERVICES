import CircularProgress from "@components/sharedComponents/CircularProgress";
import React, { Suspense } from "react";
const page = () => {
  return (
    <section className="bg-gradient-to-r from-[#12100E] to-[#2B4162]  text-white">
      <div className="w-full h-[250px] sm:h-full ">
        <Suspense fallback={<CircularProgress />}>
          <video
            muted
            autoPlay
            className="w-full object-fit h-full mt-8 sm:mt-0"
          >
            <source src="/assets/videos/asan.mp4" type="video/mp4" />
          </video>
        </Suspense>
      </div>
      <div className="w-full  flex flex-col md:flex-row  justify-around  items-center">
        <div className="lg:ml-8 w-full md:w-[50%] h-full  flex justify-center items-center flex-col my-3 md:my-5">
          <h1 className="px-4 text-xl  my-2 lg:my-5 md:text-xl lg:text-3xl">
            Benefici
          </h1>
          <p className=" lg:px-2 w-[80%] md:text-lg lg:w-[90%] lg:text-xl">
            Praticare il Pranayama, che è come una specie di "ginnastica per il
            respiro" nello yoga, può portare a benefici davvero fantastici per
            il nostro corpo e la nostra mente. Immagina che sia come prendersi
            una pausa speciale per il tuo respiro. In primo luogo, ti aiuta a
            sentirti più tranquillo e felice, proprio come una piccola pausa
            relax per il tuo cervello. Inoltre, ti aiuta a respirare meglio,
            rendendo i polmoni più forti. Ecco un segreto: quando respiri bene,
            il tuo corpo ottiene più ossigeno, e questo ti rende più energetico
            e attivo. È come una magia positiva per il tuo corpo! Inoltre, se
            hai un po' di difficoltà a dormire, il Pranayama può essere come una
            dolce ninna nanna per aiutarti a rilassarti e dormire meglio.
            Quindi, in poche parole, il Pranayama è come una piccola magia del
            respiro che rende il tuo corpo e la tua mente più felici e sani!
          </p>
        </div>
        <div className=" w-full md:w-[50%] h-[90vh] md:h-full lg:h-[95vh] my-10 lg:my-10 md:my-0">
          <Suspense fallback={<CircularProgress />}>
            <video muted autoPlay loop className="w-full object-fit h-full">
              <source src="/assets/videos/benefici.mp4" type="video/mp4" />
            </video>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default page;
