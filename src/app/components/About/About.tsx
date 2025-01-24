"use client";
import React from "react";
import imgAbout from "../../../../public/assets/imageAbout.png";
import logo from "../../../../public/assets/logoFlorDeLotoOriginal.png";
import Image from "next/image";
import { useRotate } from "@/app/hooks/useRotate";
export const About: React.FC = () => {
  const rotateScreen = useRotate();
  return (
    <div
      id="about"
      className="w-full lg:min-h-screen bg-white lg:bg-bgAbout pt-20 lg:pb-28 flex flex-col lg:flex-row justify-center items-center bg-cover"
    >
      <div className="w-full lg:w-1/2 lg:h-full flex justify-center lg:justify-end items-center px-4">
        <Image
          src={imgAbout}
          alt="about"
          className={`${
            rotateScreen
              ? "w-1/3 md:w-1/2 lg:w-2/3 xl:w-3/6 lg:mr-5 pt-5"
              : "w-5/6 md:w-1/2 lg:w-2/3 xl:w-3/6 lg:mr-5 pt-5"
          } `}
        />
      </div>
      <div className="w-full lg:w-1/2 lg:h-full flex justify-center  lg:justify-start items-center px-4 ">
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center gap-4">
          <Image src={logo} alt="logo" className="hidden lg:flex w-1/3" />
          <h1 className="bg-textGradient bg-clip-text text-transparent text-2xl md:text-4xl text-center lg:text-5xl font-textSecondary mt-2 lg:mt-0">
            Flor de Loto
          </h1>
          <p className="font-textSecondary text-start px-5 md:px-16 lg:px-0 text-sm md:text-lg font-light w-5/6 md:w-2/3 lg:w-auto pb-3">
            Descubre la magia del bienestar en cada aroma. En Flor de Loto, te
            ofrecemos sahumerios, cascadas de humo y productos únicos que
            transforman tus espacios en refugios de calma y energía positiva.
            Encuentra el equilibrio que buscas, con el toque perfecto de armonía
            y estilo.
          </p>
        </div>
      </div>
    </div>
  );
};
