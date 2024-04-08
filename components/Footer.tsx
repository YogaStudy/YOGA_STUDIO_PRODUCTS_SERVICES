import Image from "next/image";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" border-t border-white min-h-[300px] w-full bg-black text-white flex flex-col justify-center items-center">
      <div className="my-2">
        <Image
          src="/assets/images/yogaApp.svg"
          alt="footerImg"
          width={50}
          height={50}
          className="object-cover rounded-full"
        />
      </div>
      <p className="text-xl my-2">Pranayama Yoga</p>
      <p className="text-red-500 font-bold text-xl">OFFERTA</p>
      <button className="rounded-lg bg-white text-black p-2 my-2">
        <span className="font-bold">Acquista solo in 25,99 £</span>
      </button>
      <h2 className="my-2">
        <p className="text-center">
          Manda email per acquistare abbonamento mensile:
        </p>
        <p className="text-center">notification@pranayama-yoga-studio.online</p>
      </h2>
    </div>
  );
};

export default Footer;
