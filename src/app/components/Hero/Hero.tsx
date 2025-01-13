"use client";
import React from "react";
import { Button } from "../Button";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
import rectangleHero from "../../../../public/assets/rectangleHero.png";
import logo from "../../../../public/assets/logoFlorDeLoto.png";

export const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="w-full pt-20 min-h-screen bg-transparent relative flex justify-center items-center overflow-hidden "
    >
      <div className="hidden lg:flex w-full z-10 bottom-0 absolute ">
        <Image
          src={rectangleHero}
          alt="hero"
          className="w-full h-full lg:h-auto object-cover  "
        />
      </div>
      <div className="z-20 relative w-full h-screen flex flex-col-reverse justify-end pb-10 lg:justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/2 flex  gap-4 justify-center lg:justify-end lg:h-full items-center lg:items-end ">
          <div className="w-full lg:w-2/3 flex flex-col  justify-center h-full items-center lg:items-start ">
            <h1 className="text-5xl md:text-7xl lg:text-9xl bg-textGradient bg-clip-text text-transparent text-center lg:text-start pt-4 font-textPrimary">
              Flor de Loto
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-5xl text-white font-extralight font-textSecondary text-center lg:text-start mb-3 ">
              Aromas y colores
            </h2>
            <p className="text-white font-textSecondary font-light text-lg px-4 lg:px-0 md:text-xl lg:text-2xl mb-4 text-center lg:text-start">
              Descubre la magia del bienestar en cada aroma. Te ofrecemos
              sahumerios, cascadas de humo y productos únicos que transforman
              tus espacios en refugios de calma y energía positiva.
            </p>
            <div className="flex gap-4 w-2/3 lg:w-full justify-center lg:justify-start">
              <Button
                text="productos"
                color="primary"
                icon={<IoMdArrowDropright />}
              />
              <Button
                text="conocenos"
                color="secondary"
                icon={<IoMdArrowDropright />}
                classButton="hidden lg:flex"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2  flex justify-center lg:justify-start lg:ml-5 items-center ">
          <Image src={logo} alt="logo" className="w-2/3 " />
        </div>
      </div>
    </div>
  );
};
