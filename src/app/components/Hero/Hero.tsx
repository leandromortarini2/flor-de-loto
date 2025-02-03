"use client";
import React from "react";
import { Button } from "../Button";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
import logo from "../../../../public/assets/logoFlorDeLoto.png";
import { useRotate } from "@/app/hooks/useRotate";
import { ButtonLanding } from "../ButtonLanding";

export const Hero: React.FC = () => {
  const rotateScreen = useRotate();
  return (
    <div
      className={`w-full h-full md:h-auto lg:h-screen bg-transparent relative bottom-0 flex justify-center items-center   overflow-hidden`}
    >
      <div className="z-20 relative   w-full h-full flex flex-col-reverse justify-center mb-10 md:justify-center items-center lg:flex-row">
        <div className="w-full lg:w-1/2 2xl:w-1/3 flex   justify-center md:justify-end  items-center md:items-end mb-5 md:mb-0 ">
          <div className=" w-5/6 md:w-full 2xl:w-5/6 flex flex-col  justify-center h-full items-center lg:items-start ">
            <h1 className="text-5xl md:text-7xl lg:text-8xl bg-textGradient bg-clip-text text-transparent text-center md:text-start pt-4 font-textPrimary">
              Flor de Loto
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-extralight font-textSecondary text-center lg:text-start mb-3 ">
              Aromas y colores
            </h2>
            <p className="text-white font-textSecondary font-light text-sm px-4 lg:px-0 md:text-base  mb-4 text-center lg:text-start w-full md:w-1/2 lg:w-3/4">
              Descubre la magia del bienestar en cada aroma. Te ofrecemos
              sahumerios, cascadas de humo y productos únicos que transforman
              tus espacios en refugios de calma y energía positiva.
            </p>
            <div className="flex gap-4 w-2/3 lg:w-full justify-center items-center lg:justify-start">
              {/* <Button
                text="productos"
                color="primary"
                icon={<IoMdArrowDropright />}
                classButton="uppercase"
                link="#products"
              /> */}

              <ButtonLanding text="productos" link="#products" />

              <Button
                text="conocenos"
                color="secondary"
                icon={<IoMdArrowDropright />}
                classButton="hidden lg:flex uppercase"
                link="#about"
              />
              {/* <ButtonLanding text="conocenos" link="#about" /> */}
            </div>
          </div>
        </div>
        <div
          className={` w-full md:w-2/3 lg:w-2/6  flex justify-center xl:justify-start  items-center `}
        >
          <Image
            src={logo}
            alt="logo"
            className={` ${
              rotateScreen ? "w-1/3 lg:w-full" : "w-[55%] lg:w-full"
            } `}
          />
        </div>
      </div>
    </div>
  );
};
