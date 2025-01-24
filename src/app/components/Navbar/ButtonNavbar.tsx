"use client";
import { INavbarButton } from "@/app/utils/arrayButtonNavbar";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { toast } from "sonner";

export const ButtonNavbar: React.FC<INavbarButton> = ({
  label,
  link,
  options,
  state,
  setState,
}) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const [labelDropdown, setLabelDropdown] = useState<string>("");
  const handleOpen = (label: string) => {
    if (label) {
      setLabelDropdown(label);
    }
    setOpenDropdown(!openDropdown);
    // recibe el estado y su funcion para setear, con el fin de que cuando se abra el dropdown, el navbar cambie el bg a negro, solo cuando el bg del navbar es transparente
    if (setState) {
      setState(!state);
    }
  };
  const handleOpenDropdown = ({
    link,
    label,
    labelDad,
  }: {
    link: string | undefined;
    label: string;
    labelDad: string;
  }) => {
    if (label) {
      setLabelDropdown(label);
    }
    setOpenDropdown(!openDropdown);
    // recibe el estado y su funcion para setear, con el fin de que cuando se abra el dropdown, el navbar cambie el bg a negro, solo cuando el bg del navbar es transparente
    if (setState) {
      setState(!state);
    }
    handleClick({ link, labelDad, label });
  };
  const handleClick = ({
    link,
    label,
    labelDad,
  }: {
    link: string | undefined;
    label: string;
    labelDad: string;
  }) => {
    console.log(labelDad);
    console.log(link);
    setOpenDropdown(false);
    toast(`Serás redirigido a ${label}`, {
      cancel: {
        label: "Cancelar",
        onClick: () => console.log("Cancel!"),
      },

      action: {
        label: "Aceptar",
        onClick: () => {
          if (labelDad !== "Catalogo") {
            window.open(link, "_blank");
          } else {
            window.open(link);
          }
        },
      },
    });
  };
  return (
    <li className="list-none">
      {options ? (
        <div className="hidden relative lg:flex justify-center">
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex !text-xl font-textSecondary  justify-between w-full py-2 px-3 text-white  md:p-0 md:w-auto hover:border-b hover:border-white"
            onClick={() => handleOpen(label)}
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
                    <button
                      onClick={() =>
                        handleOpenDropdown({
                          label: option.label,
                          link: option.link,
                          labelDad: label,
                        })
                      }
                      className="flex  justify-center font-textSecondary items-center gap-2  px-4 py-2  !text-lg hover:border-b hover:border-white mx-1"
                    >
                      {option.icon && <option.icon />}
                      {option.label}
                    </button>
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
