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
            className="flex font-textSecondary items-center justify-between w-full py-2 px-3 text-white md:border-0 md:p-0 md:w-auto hover:border-b hover:border-white"
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
              className="z-10 absolute top-12 font-normal bg-red-200 divide-y divide-gray-100   "
            >
              <ul
                className="py-2 text-sm text-gray-700 "
                aria-labelledby="dropdownLargeButton"
              >
                {button.options.map((option, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex justify-center font-textSecondary items-center gap-2  px-4 py-2 hover:border-b hover:border-white"
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
          href="#"
          className="block py-2 px-3 text-white hover:border-b hover:border-white     md:p-0 "
          aria-current="page"
        >
          {button.label}
        </a>
      )}
    </li>
  );
};
