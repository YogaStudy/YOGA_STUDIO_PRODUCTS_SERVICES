"use client";
import Link from "next/link";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import Menu from "./Menu";
import { close, menu } from "@public/assets/icons";
import { useClickOutside } from "@hooks";
import { navbar_list } from "@components/constants";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const refProfileMenu = useRef<HTMLDivElement | null>(null);
  const handeCloseProfileMenu = () => {
    setToggleDropdown(false);
  };
  useClickOutside(handeCloseProfileMenu, refProfileMenu);
  // menu bar
  const refMenu = useRef<HTMLDivElement | null>(null);
  const handeCloseMenu = () => {
    setOpenMenu(false);
  };
  useClickOutside(handeCloseMenu, refMenu);
  return (
    <>
      <nav className="flex w-full py-6 px-5 relative justify-between items-center">
        {/* logo and mobile menu */}
        <div
          className={`w-[50%]
          sm:flex-row  
          flex flex-row-reverse  justify-between sm:justify-between items-center`}
        >
          <div className="">
            <Link href="/" className="flex gap-2 justify-center items-center">
              <Image
                src="/assets/images/yogaApp.svg"
                alt="logo"
                width={30}
                height={30}
                className="object-contain rounded-full"
              />
              <p className="logo_text nav_link">Yoga Studio</p>
            </Link>
          </div>

          {/*menu bar for mobile */}
          <div className={`block sm:hidden `} ref={refMenu}>
            <Image
              src={openMenu ? close : menu}
              alt={openMenu ? "Close Icon" : "Menu Icon"}
              width={30}
              height={30}
              className="object-contain rounded-full "
              onClick={() => setOpenMenu(!openMenu)}
            />
            {openMenu && (
              <Menu setOpenMenu={setOpenMenu} navbar_list={navbar_list} />
            )}
          </div>
        </div>
        {/* navigation bar for desktop */}
        <div
          className={`flex justify-end w-[50%] md:w-[40%] lg:w-[30%]
          `}
        >
          <div
            className={`sm:flex hidden w-full lg:w-[90%] justify-around  items-center `}
          >
            {navbar_list.map((item, index) => (
              <Link href={item.link} className="nav_link" key={index}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Navbar);
