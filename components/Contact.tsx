"use client";
import Image from "next/image";
import React, { Suspense, useState } from "react";
const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full bg-black text-white ">
      <div className="relative h-[60vh] sm:h-[80vh] w-full sm:w-[40%]  lg:w-[30%]">
        <Image
          width={1000}
          height={600}
          src="/assets/images/contact2.png"
          className="w-full h-full object-center   opacity-50"
          alt="Contact info"
        />
        <h1 className="absolute bottom-5 left-10 block sm:hidden">
          Contact Us
        </h1>
      </div>
      <div className="w-full sm:w-[60%] lg:w-[70%] flex flex-col justify-center items-center lg:p-10 lg:px-20">
        <h1 className="text-xl font-bold hidden sm:block">
          Informazioni sui contatti
        </h1>
        <p className="p-5 px-10 lg:px-20  text-md">
          <p className="my-2 lg:my-5">
            Siamo lieti di assisterti per qualsiasi richiesta, feedback o
            l'assistenza di cui potresti aver bisogno. Non esitate a contattarci
            utilizzando questa e-mail.
          </p>
          <p className="my-2 lg:my-5">
            Email: Per richieste generali o assistenza, inviare un'e-mail a{" "}
            <br />
            <u>notification@pranayama-yoga-studio.online</u>
          </p>
          <p className="my-2 lg:my-5">
            Siamo qui per aiutarti: Il nostro team è dedicato a fornirti
            servizio e assistenza eccellenti. Non esitate a contattarci per
            qualsiasi motivo, sia che si tratti di una domanda sui nostri
            prodotti, di una preoccupazione sul tuo ordine o feedback sulla tua
            esperienza con noi. Apprezziamo il tuo contributo e ci impegniamo a
            garantire la tua soddisfazione.
          </p>
          <h3 className="text-end">da Pranayama Yoga Team</h3>
        </p>
      </div>
    </div>
  );
};

export default Contact;
