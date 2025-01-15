import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export const WhatsappButton: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-0 p-3 group z-20">
      <a
        href="https://wa.me/+5401126034427?text=Hola Flor de Loto!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 p-1 bg-white dark:bg-textoSecundario flex justify-center items-center rounded-full">
          <IoLogoWhatsapp className="text-5xl text-green-400 hover:cursor-pointer hover:text-green-600 transition duration-500" />
        </button>

        <span className="absolute bottom-5 right-20 mb-2 hidden bg-white group-hover:block bg-textoSecundarioDark text-textoSecundario text-xs rounded py-1 px-2">
          Contáctanos
        </span>
      </a>
    </div>
  );
};
