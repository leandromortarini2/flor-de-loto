import Image from "next/image";
import React from "react";
import { Button } from "../Button";
interface IProductCard {
  img: string;
  title: string;
  description: string;
  link: string;
  label: string;
  direction: string;
}

export const ProductCard: React.FC<IProductCard> = ({
  img,
  title,
  description,
  link,
  label,
  direction,
}) => {
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
          alt={title}
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
        <h1 className="font-textSecondary text-2xl lg:text-3xl text-violet">
          {title}
        </h1>
        <div
          className={`w-full lg:w-2/5 flex  lg:hidden ${
            direction == "right"
              ? " justify-center lg:justify-end"
              : "justify-center lg:justify-start"
          } `}
        >
          <Image
            src={img}
            alt={title}
            width={300}
            height={300}
            className="w-3/4  md:w-1/2"
          />
        </div>
        <p
          className={` w-3/4 md:w-3/5 lg:w-2/3 text-base  md:text-lg ${
            direction == "right"
              ? "text-start lg:text-start"
              : "text-start lg:text-end"
          }`}
        >
          {description}
        </p>
        <div
          className={`w-full flex px-10 md:px-36 lg:px-0 ${
            direction == "right"
              ? "justify-end lg:justify-start"
              : "justify-end lg:justify-end"
          }`}
        >
          <Button text={label} color="primary" link={link} classButton="" />
        </div>
      </div>
    </div>
  );
};
