"use client";
import React from "react";
import { Button } from "../Button";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
import logo from "../../../../public/assets/logoFlorDeLoto.png";

export const Hero: React.FC = () => {
  return (
    <div className="w-full  md:h-auto lg:h-screen  bg-transparent relative bottom-0 flex justify-center items-center   overflow-hidden   ">
      <div className="z-20 relative   w-full h-full flex flex-col-reverse justify-end  pb-10 md:justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/2 flex  gap-4 justify-center md:justify-end lg::h-full items-center md:items-end ">
          <div className="w-full  flex flex-col  justify-center h-full items-center lg:items-start ">
            <h1 className="text-5xl md:text-7xl lg:text-8xl bg-textGradient bg-clip-text text-transparent text-center md:text-start pt-4 font-textPrimary">
              Flor de Loto
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-extralight font-textSecondary text-center lg:text-start mb-3 ">
              Aromas y colores
            </h2>
            <p className="text-white font-textSecondary font-light text-lg px-4 lg:px-0 md:text-xl xl:text-2xl mb-4 text-center lg:text-start">
              Descubre la magia del bienestar en cada aroma. Te ofrecemos
              sahumerios, cascadas de humo y productos únicos que transforman
              tus espacios en refugios de calma y energía positiva.
            </p>
            <div className="flex gap-4 w-2/3 lg:w-full justify-center lg:justify-start">
              <Button
                text="productos"
                color="primary"
                icon={<IoMdArrowDropright />}
                link="#products"
              />
              <Button
                text="conocenos"
                color="secondary"
                icon={<IoMdArrowDropright />}
                classButton="hidden lg:flex"
                link="#about"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/3  flex justify-center xl:justify-start lg:ml-5 items-center ">
          <Image src={logo} alt="logo" className="w-2/3 lg:w-full" />
        </div>
      </div>
    </div>
  );
};
