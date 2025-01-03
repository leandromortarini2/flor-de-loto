"use client";
import { INavbarButton } from "@/app/utils/arrayButtonNavbar";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export const ButtonNavbar: React.FC<INavbarButton> = (button) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const [labelDropdown, setLabelDropdown] = useState<string>("");
  const handleOpenDropdown = (label: string) => {
    if (label) {
      setLabelDropdown(label);
    }
    setOpenDropdown(!openDropdown);
  };
  return (
    <li className="list-none">
      {button.options ? (
        <div className="relative flex justify-center">
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex !text-xl font-textSecondary  justify-between w-full py-2 px-3 text-white  md:p-0 md:w-auto hover:border-b hover:border-white"
            onClick={() => handleOpenDropdown(button.label)}
          >
            {button.label}
            <IoMdArrowDropdown
              className={`text-white text-2xl ${openDropdown && "rotate-180"}`}
            />
          </button>
          {openDropdown && labelDropdown == button.label && (
            <div
              id="dropdownNavbar"
              className="z-10 absolute top-10  md:top-14  font-normal bg-black divide-y divide-gray-100 flex justify-center  shadow shadow-gray-200 "
            >
              <ul
                className="py-2  text-white "
                aria-labelledby="dropdownLargeButton"
              >
                {button.options.map((option, index) => (
                  <li key={index} className="">
                    <a
                      onClick={() => handleOpenDropdown(button.label)}
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
          href={button.link}
          className="flex justify-center py-2 px-3 text-white hover:border-b hover:border-white text-xl md:p-0 "
          aria-current="page"
        >
          {button.label}
        </a>
      )}
    </li>
  );
};
