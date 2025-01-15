"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { toast } from "sonner";

export const Footer: React.FC = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Copiado al portapapeles"))
      .catch((error) => toast.error("Error al copiar al portapapeles"));
  };
  return (
    <div className="w-full min-h-[30rem] lg:min-h-48 bg-bgFooterMb lg:bg-bgFooter bg-cover p-4 flex  justify-center">
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-center lg:justify-evenly gap-20 px-5 ">
        <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-center gap-2">
          <h2 className="text-fucsiaClaro font-textSecondary text-base md:text-lg">
            Contactanos!
          </h2>
          <button
            onClick={() => handleCopy("flordeloto@gmail.com")}
            className="text-white  font-textSecondary flex items-center gap-1 text-sm md:text-base  hover:text-rosa "
          >
            <MdAlternateEmail />
            flordeloto@gmail.com
          </button>
          <button
            onClick={() => handleCopy("11 2288- 3245")}
            className="text-white  font-textSecondary flex items-center gap-1  text-sm md:text-base  hover:text-rosa "
          >
            <FaPhoneAlt /> 11 2288- 3245
          </button>
        </div>
        <div className="flex gap-20 justify-evenly w-full lg:w-2/3">
          <div className="flex flex-col  items-start lg:items-center w-1/2 lg:w-1/3 gap-2">
            <h2 className="text-fucsiaClaro  font-textSecondary text-base md:text-lg">
              Mapa de sitio
            </h2>
            <Link
              href="#hero"
              className="text-white font-textSecondary text-sm md:text-base  hover:text-rosa "
            >
              Inicio
            </Link>
            <Link
              href="#about"
              className="text-white font-textSecondary text-sm md:text-base  hover:text-rosa "
            >
              Conocenos
            </Link>
            <Link
              href="#products"
              className="text-white font-textSecondary text-sm md:text-base  hover:text-rosa "
            >
              Productos
            </Link>
          </div>
          <div className="flex flex-col  items-start lg:items-center w-1/2 lg:w-1/3  gap-2">
            <h2 className="text-fucsiaClaro font-textSecondary text-base md:text-lg">
              ¡Siguenos!
            </h2>
            <div className="flex gap-2 justify-center">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/flor_de_loto_aromas_y_color/"
                className="text-white font-textSecondary text-base md:text-lg hover:text-rosa "
              >
                <FaInstagram />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://web.facebook.com/profile.php?id=100070364314628"
                className="text-white font-textSecondary text-base md:text-lg hover:text-rosa "
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
