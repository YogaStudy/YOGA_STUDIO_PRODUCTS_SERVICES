import React from "react";
import Image from "next/image";
import { FormPostTypes } from "@components/types";

const PromptCard = ({ item }: { item: FormPostTypes }) => {
  return (
    <div className="prompt_card">
      <div className="flex flex-col justify-between items-start">
        <h1 className="my-2 text-lg break-all">{item.title}</h1>
        <Image
          priority={true}
          alt={item?.title}
          src={item?.image}
          width={300}
          height={300}
          className="object-fit rounded-lg w-auto h-auto"
        />
        <h1 className="my-2 break-all">{item?.content}</h1>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-bg-black-gradient break-all">#{item?.tag}</h1>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
