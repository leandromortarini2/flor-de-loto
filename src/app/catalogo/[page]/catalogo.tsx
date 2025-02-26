"use client";
import React, { use, useEffect, useState } from "react";
import { categoriesArray } from "../../utils/arrayCategories";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import {
  Cascadas,
  Colecciones,
  Duendes,
  Hornillos,
  LamparadeSal,
  PortaSahumerios,
} from "./view"; //aca se estan importando las vistas desde la carpeta view ya que todas estan exportadas por default desde index.ts
import LotoLoader from "@/app/components/Loader";
import { Sahumado } from "./view/Sahumado";
import { WhatsappButton } from "@/app/components/WhatsappButton/WhatsappButton";
import Tejidos from "./view/Tejidos";

const viewComponents: { [key: string]: React.ReactNode } = {
  Sahumado: <Sahumado />,
  "Porta Sahumerios": <PortaSahumerios />,
  "Cascadas de humo": <Cascadas />,
  Hornillos: <Hornillos />,
  Tejido: <Tejidos />,
  Duendes: <Duendes />,
  Colecciones: <Colecciones />,
  "Lampara de Sal": <LamparadeSal />,
};

const Catalogo = ({ params }: { params: Promise<{ page: string }> }) => {
  const { page } = use(params);
  const [openView, setOpenView] = useState<string>("");
  console.log(page);
  const [focusButton, setFocusButton] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const handleOpenView = (cat: string) => {
    if (cat) {
      setOpenView(cat);
    }
  };

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [openView]);

  useEffect(() => {
    const productName = decodeURIComponent(page); // Capturar el nombre del producto
    if (productName) {
      setOpenView(productName);
      setFocusButton(true);
    }
  }, [params]);

  return (
    <div className="w-full min-h-screen relative">
      <WhatsappButton />
      <aside
        id="default-sidebar"
        className="hidden lg:block fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-violetOscuro ">
          <ul className=" font-medium">
            <li className="">
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
                <Link href={`/catalogo/${cat.name}`} key={cat.id}>
                  <button
                    className={`w-full flex justify-start p-2 mb-2  rounded-lg   capitalize focus:bg-gray-100 focus:text-violetOscuro ${
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
                </Link>
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
      <div className="w-full bg-violetOscuro text-white h-12 flex justify-center items-center lg:hidden">
        <Image src={"/flordelotoicon.svg"} alt="logo" width={30} height={30} />
        Flor de loto
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-4">
          {loader ? (
            <LotoLoader />
          ) : openView && viewComponents[openView] ? (
            viewComponents[openView]
          ) : (
            <h1>Selecciona una categoría del catálogo</h1>
          )}
        </div>
      </div>

      <div className="w-full   h-20 flex justify-center items-center sticky bottom-0 lg:hidden">
        <Link href="/#products" className="w-full  h-full text-white">
          <button className="w-1/3 rounded-t-3xl rounded-l-none bg-red-500 hover:bg-red-700 h-full text-white flex justify-center gap-1 items-center font-bold tracking-widest">
            <BiArrowBack />
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Catalogo;
