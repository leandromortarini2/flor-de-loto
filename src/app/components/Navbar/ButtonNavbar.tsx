"use client";
import { INavbarButton } from "@/app/utils/arrayButtonNavbar";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { toast } from "sonner";

export const ButtonNavbar: React.FC<INavbarButton> = ({
  label,
  link,
  options,
  handle,
  isOpen,
}) => {
  const handleClick = ({
    link,
    label,
    labelDad,
  }: {
    link: string | undefined;
    label: string;
    labelDad: string;
  }) => {
    if (handle) handle("");

    // Si es del dropdown "Categorías", se concatena el título a la URL
    const finalLink =
      labelDad === "Catalogo" && link
        ? `${link}?product=${encodeURIComponent(label)}`
        : link || "/";

    toast(`Serás redirigido a ${label}`, {
      cancel: {
        label: "Cancelar",
        onClick: () => console.log("Cancel!"),
      },

      action: {
        label: "Aceptar",
        onClick: () => {
          if (labelDad !== "Catalogo") {
            window.open(finalLink, "_blank");
          } else {
            window.location.href = finalLink;
          }
        },
      },
    });
  };

  return (
    <li className="list-none">
      {options ? (
        <div className="hidden relative lg:flex justify-center  ">
          <button
            className={`flex !text-lg font-textSecondary justify-between items-center lg:mt-1 w-full py-2 px-3 md:p-0 md:w-auto hover:text-rosa ${
              isOpen && isOpen === label ? "text-rosa" : "text-white"
            }`}
            onClick={() => handle && handle(label)}
          >
            {label}
            <IoMdArrowDropdown
              className={`text-2xl transition-transform  ${
                isOpen && isOpen === label
                  ? "rotate-180 text-rosa"
                  : "text-inherit" // `text-inherit` hereda el color del padre en vez de poner un color fijo como text-white
              } group-hover:text-rosa`} // `group` permite a los elementos hijos heredar eventos del contenedor padre, como el `hover`
            />
          </button>
          {isOpen && isOpen === label && (
            <div className="z-10 absolute top-10 md:top-14 min-w-48 font-normal bg-black divide-y divide-gray-100 flex justify-center shadow shadow-violetOscuro">
              <ul
                className="py-2 text-white"
                aria-labelledby="dropdownLargeButton"
              >
                {options.map((option, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        handleClick({
                          label: option.label,
                          link: option.link,
                          labelDad: label,
                        })
                      }
                      className="w-full flex whitespace-nowrap justify-start font-textSecondary items-center gap-2 px-4 py-2 !text-lg hover:text-rosa mx-1"
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
          className="flex justify-center  py-2 px-3 text-white hover:text-rosa text-xl md:p-0"
        >
          {label}
        </a>
      )}
    </li>
  );
};
