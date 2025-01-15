"use client";
import { INavbarButton } from "@/app/utils/arrayButtonNavbar";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export const ButtonNavbar: React.FC<INavbarButton> = ({
  label,
  link,
  options,
  state,
  setState,
}) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const [labelDropdown, setLabelDropdown] = useState<string>("");
  const handleOpenDropdown = (label: string) => {
    if (label) {
      setLabelDropdown(label);
    }
    setOpenDropdown(!openDropdown);
    // recibe el estado y su funcion para setear, con el fin de que cuando se abra el dropdown, el navbar cambie el bg a negro, solo cuando el bg del navbar es transparente
    if (setState) {
      setState(!state);
    }
  };
  return (
    <li className="list-none">
      {options ? (
        <div className="hidden relative lg:flex justify-center">
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex !text-xl font-textSecondary  justify-between w-full py-2 px-3 text-white  md:p-0 md:w-auto hover:border-b hover:border-white"
            onClick={() => handleOpenDropdown(label)}
          >
            {label}
            <IoMdArrowDropdown
              className={`text-white text-2xl ${openDropdown && "rotate-180"}`}
            />
          </button>
          {openDropdown && labelDropdown == label && (
            <div
              id="dropdownNavbar"
              className="z-10 absolute top-10  md:top-14  font-normal bg-black divide-y divide-gray-100 flex justify-center  shadow shadow-violetOscuro "
            >
              <ul
                className="py-2  text-white "
                aria-labelledby="dropdownLargeButton"
              >
                {options.map((option, index) => (
                  <li key={index} className="">
                    <a
                      onClick={() => handleOpenDropdown(label)}
                      href={option.link}
                      rel={option.rel || undefined}
                      target={option.target || undefined}
                      className="flex justify-center font-textSecondary items-center gap-2  px-4 py-2  !text-lg "
                    >
                      {option.icon && <option.icon />}
                      {option.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <a
          href={link}
          className="flex justify-center py-2 px-3 text-white hover:border-b hover:border-white text-xl md:p-0 "
          aria-current="page"
        >
          {label}
        </a>
      )}
    </li>
  );
};
