"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
  const [openDropdown, setOpenDropdown] = useState<string>("");

  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenuMovile, setOpenMenuMovile] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    setOpenMenuMovile(!openMenuMovile);
  };
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpen = (label: string) => {
    console.log(label);
    if (openDropdown === label) {
      setOpenDropdown("");
    } else {
      setOpenDropdown(label);
      setIsScrolled(true);
    }

    // recibe el estado y su funcion para setear, con el fin de que cuando se abra el dropdown, el navbar cambie el bg a negro, solo cuando el bg del navbar es transparente
  };

  return (
    <div
      className={`top-0 z-50 sticky transition-all duration-300 w-full  ${
        isScrolled || openMenu ? "bg-black " : "bg-transparent"
      }  `}
    >
      <nav className="h-20 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center gap-1 ">
            <Image src={icon} className="h-10 " alt="Flowbite Logo" />
            <span className="self-center text-lg md:text-2xl font-textSecondary  whitespace-nowrap text-white mt-1">
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
                <ButtonNavbar
                  handle={handleOpen}
                  key={index}
                  {...button}
                  title={button.label}
                  isOpen={openDropdown}
                /> //al pasar {...button} estoy desestructurando las propiedades de button y pasandolas directamente como propiedades al componente ButtonNavbar
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {openMenu && <MenuHamburguer arrayButton={navbarButtonMovile} />}
    </div>
  );
};
