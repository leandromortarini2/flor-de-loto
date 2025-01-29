"use client";
import React, { useEffect, useState } from "react";
import { categoriesArray } from "../utils/arrayCategories";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { Cascadas, LamparaSal, PaloSanto, PortaSahumerio } from "./view"; //aca se estan importando las vistas desde la carpeta view ya que todas estan exportadas por default desde index.ts

const viewComponents: { [key: string]: React.ReactNode } = {
  "Palo Santo": <PaloSanto />,
  "Cascada de humo": <Cascadas />,
  "Lampara de sal": <LamparaSal />,
  "Porta Sahumerio": <PortaSahumerio />,
};

const Catalogo = () => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product"); // Capturar el nombre del producto
  const [openView, setOpenView] = useState<string | null>(productName);
  console.log(openView);
  const [focusButton, setFocusButton] = useState<boolean>(false);
  const handleOpenView = (cat: string) => {
    if (cat) {
      setOpenView(cat);
    }
  };
  useEffect(() => {
    if (openView) {
      setFocusButton(true);
    }
  }, [openView]);

  return (
    <div className="w-full min-h-screen relative">
      <aside
        id="default-sidebar"
        className="hidden lg:block fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-violetOscuro ">
          <ul className=" font-medium">
            <div className="w-full h-8"></div>
            {/* <li className="py-2">
              <p className="flex items-center p-2 text-white rounded-lg  gap-1 ">
                <Image
                  src={"/flordelotoicon.svg"}
                  alt="logo"
                  width={30}
                  height={30}
                />
                Flor de Loto
              </p>
            </li> */}
            {/* <div className="w-full border-b border-white"></div> */}
            <li className="gap-4 pt-2">
              {categoriesArray.map((cat) => (
                <button
                  key={cat.id}
                  className={`w-full flex justify-start p-2  rounded-lg   capitalize focus:bg-gray-100 focus:text-violetOscuro ${
                    focusButton && cat.name === openView
                      ? "bg-gray-100 text-violetOscuro"
                      : "text-white"
                  }  ${
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

      <div className="w-full   h-10 flex justify-center items-center sticky bottom-0 lg:hidden">
        <Link
          href="/#products"
          className="w-full bg-violetOscuro h-full text-white"
        >
          <button className="w-full bg-violetOscuro h-full text-white flex justify-center gap-1 items-center">
            <BiArrowBack />
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Catalogo;
