"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import icon from "../../../../public/flordelotoicon.svg";
import {
  navbarButton,
  navbarButtonMovile,
} from "../../utils/arrayButtonNavbar";
import { MenuHamburguer } from "./MenuHamburguer";
import { ButtonNavbar } from "./ButtonNavbar";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="relative">
      <nav className="h-20  bg-black ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center  ">
            <Image src={icon} className="h-10 " alt="Flowbite Logo" />
            <span className="self-center text-lg md:text-2xl font-textSecondary  whitespace-nowrap text-white">
              Flor de Loto
            </span>
          </a>
          <button
            type="button"
            className=" items-center flex  w-10 h-10 justify-center text-sm text-rosa rounded-lg lg:hidden"
            onClick={handleOpenMenu}
          >
            <BiMenuAltRight className="w-10 h-10" />
          </button>
          <div
            className="hidden w-full lg:block lg:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border justify-center  rounded-lg  lg:space-x-8  lg:flex-row lg:mt-0 lg:border-0">
              {navbarButton.map((button, index) => (
                <ButtonNavbar key={index} {...button} /> //al pasar {...button} estoy desestructurando las propiedades de button y pasandolas directamente como propiedades al componente ButtonNavbar
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {openMenu && <MenuHamburguer arrayButton={navbarButtonMovile} />}
    </div>
  );
};
