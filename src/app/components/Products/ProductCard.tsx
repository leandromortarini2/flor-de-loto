"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../Button";
import { useRotate } from "@/app/hooks/useRotate";
interface IProductCard {
  img: string;
  name: string;
  description: string;
  link: string;
  label: string;
  direction: string;
  view: string;
}

export const ProductCard: React.FC<IProductCard> = ({
  img,
  name,
  description,
  link,
  label,
  direction,
  view,
}) => {
  const rotateScreen = useRotate();
  return (
    <div
      className={`w-full flex  justify-center my-8 gap-4 ${
        direction == "right"
          ? "flex-col lg:flex-row"
          : "flex-col lg:flex-row-reverse"
      }`}
    >
      <div
        className={`hidden w-full lg:w-2/5 lg:flex ${
          direction == "right"
            ? "justify-center lg:justify-end"
            : "justify-center lg:justify-start"
        } `}
      >
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          className="w-1/2"
        />
      </div>
      <div
        className={`w-full lg:w-3/5 px-4 flex flex-col justify-center gap-4  ${
          direction == "right"
            ? "items-center lg:items-start"
            : "items-center lg:items-end"
        }`}
      >
        <div className="w-3/4 md:w-3/5 lg:w-2/3 min-h-72  flex flex-col justify-evenly tracking-widest ">
          <div className={`w-full flex justify-center lg:justify-start`}>
            <h2 className="font-textSecondary text-2xl lg:text-3xl 2xl:text-4xl text-violet">
              {name}
            </h2>
          </div>

          <div
            className={`w-full lg:w-2/5 flex  lg:hidden my-4 lg:my-0 ${
              direction == "right"
                ? " justify-center lg:justify-end"
                : "justify-center lg:justify-start"
            } `}
          >
            <Image
              src={img}
              alt={name}
              width={300}
              height={300}
              className={`${
                rotateScreen ? "w-1/3 md:w-3/6" : "w-3/4  md:w-3/5"
              } `}
            />
          </div>

          <div
            className={`w-full flex my-4 lg:my-0 ${
              direction == "right" ? "justify-start" : "justify-start"
            }`}
          >
            <p
              className={`w-full lg:w-3/4  text-base  md:text-xl  text-start tracking-wide`}
            >
              {description}
            </p>
          </div>

          <div
            className={`w-full flex justify-end lg:justify-start my-4 lg:my-0 `}
          >
            <Button
              text={label}
              color="primary"
              link={link}
              view={view}
              classButton="capitalize text-sm lg:w-52 h-8 lg:h-10 lg:text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
