"use client";
import Link from "next/link";
import React, { memo } from "react";

interface Props {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  navbar_list: { text: string; link: string }[];
}
const Menu = ({ setOpenMenu, navbar_list }: Props) => {
  return (
    <>
      <div className={`dropdown z-30 sidebar relative`}>
        {navbar_list.map((item, index) => (
          <Link
            href={item.link}
            onClick={() => setOpenMenu(false)}
            className="dropdown_link nav_link w-full text-center py-[0.5rem] border-b border-red-800"
            key={index}
          >
            <h1>{item.text}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default memo(Menu);
