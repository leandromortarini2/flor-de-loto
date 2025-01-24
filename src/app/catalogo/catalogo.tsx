"use client";
import React, { useState } from "react";
import { categoriesArray } from "../utils/arrayCategories";
import Image from "next/image";
import { Sahumerios } from "./view/Sahumerios";
import Link from "next/link";
import { Cascadas } from "./view/Cascadas";
import { useSearchParams } from "next/navigation";

const viewComponents: { [key: string]: React.ReactNode } = {
  "Palo Santo": <Sahumerios />,
  "Cascada de humo": <Cascadas />,
};

const Catalogo = () => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product"); // Capturar el nombre del producto
  const [openView, setOpenView] = useState<string | null>(productName);
  const handleOpenView = (cat: string) => {
    if (cat) {
      setOpenView(cat);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <aside
        id="default-sidebar"
        className="hidden lg:block fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-violetOscuro ">
          <ul className=" font-medium">
            <li className="py-2">
              <p className="flex items-center p-2 text-white rounded-lg  gap-1 ">
                <Image
                  src={"/flordelotoicon.svg"}
                  alt="logo"
                  width={30}
                  height={30}
                />
                Flor de Loto
              </p>
            </li>
            <div className="w-full border-b border-white"></div>
            <li className="gap-4 pt-2">
              {categoriesArray.map((cat) => (
                <button
                  key={cat.id}
                  className={`w-full flex justify-start p-2 text-white rounded-lg   capitalize focus:bg-gray-100 focus:text-violetOscuro ${
                    cat.disabledButton
                      ? "opacity-50 "
                      : "hover:bg-gray-100  hover:text-violetOscuro"
                  }`}
                  onClick={() => handleOpenView(cat.name)}
                  disabled={cat.disabledButton}
                >
                  <span className="flex  whitespace-nowrap">{cat.name}</span>
                </button>
              ))}
            </li>
            <li>
              <Link
                href="/#products"
                className="w-full flex justify-start p-2 text-white rounded-lg  hover:bg-gray-100  hover:text-violetOscuro capitalize focus:bg-gray-100 focus:text-violetOscuro"
              >
                Salir
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="w-full bg-violetOscuro text-white h-12 flex justify-center items-center">
        <Image src={"/flordelotoicon.svg"} alt="logo" width={30} height={30} />
        Flor de loto
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 ">
          {/* Render dinámico basado en el estado openView */}
          {openView && viewComponents[openView] ? (
            viewComponents[openView]
          ) : (
            <h1>Selecciona una categoría del catálogo</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default Catalogo;
