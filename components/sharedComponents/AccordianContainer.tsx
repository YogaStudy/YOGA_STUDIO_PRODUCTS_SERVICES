"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
interface ParagraphsProps {
  text: string;
}

interface Props {
  headText: string;
  paragraphs: ParagraphsProps[];
}

const AccordionContainer = ({ headText, paragraphs }: Props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="bg-[#F4F4F4]  flex flex-col justify-center items-center p-4 md:px-[5rem] md:py-6 rounded-xl border-b-4 border-[#dfdfdf] mb-6">
      <div className="flex  justify-between items-center w-full">
        <h1 className="font-bold text-sm sm:text-lg"> {headText}</h1>
        <div className=" transition-all duration-75 ">
          {show ? (
            <IoIosArrowUp
              className="text-3xl text-[#ABABAB]"
              onClick={handleClick}
            />
          ) : (
            <IoIosArrowDown
              className="text-3xl text-[#ABABAB]"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      <div className={`${show ? "open" : "close"} `}>
        <div
          className={`${show ? "block " : "hidden "}  mt-4  text-[#5f5f5f]  `}
        >
          {paragraphs.map((paragraph) => (
            <p className="pb-4 px-1" key={paragraph.text}>
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionContainer;
