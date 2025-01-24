"use client";

import Image from "next/image";
import React from "react";
import { toast } from "sonner";

export const WhatsappButton: React.FC = () => {
  const handleClick = () => {
    toast("Serás redirigido a WhatsApp", {
      style: {},
      cancel: {
        label: "Cancelar",

        onClick: () => console.log("Cancel!"),
      },
      action: {
        label: "Aceptar",
        onClick: () => {
          window.open(
            "https://wa.me/+5401122883245?text=Hola Flor de Loto!",
            "_blank"
          );
        },
      },
    });
  };

  return (
    <div className="fixed bottom-0 right-0 p-3 group z-20">
      <button
        onClick={handleClick}
        className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 p-1 dark:bg-textoSecundario flex justify-center items-center rounded-full"
      >
        <Image
          src={"/whatsapp.svg"}
          alt="whatsapp"
          width={50}
          height={50}
          className="hover:cursor-pointer"
        />
      </button>

      <span className="absolute bottom-5 right-20 mb-2 hidden bg-white group-hover:block bg-textoSecundarioDark text-textoSecundario text-xs rounded py-1 px-2">
        Contáctanos
      </span>
    </div>
  );
};
