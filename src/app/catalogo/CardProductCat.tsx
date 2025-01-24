import Image from "next/image";
import React from "react";
import { Button } from "../components/Button";

interface CardProductCatProps {
  image: string;
  title: string;
  description: string;
  linkButton: string;
  textButton: string;
  price: number;
}
export const CardProductCat: React.FC<CardProductCatProps> = ({
  image,
  title,
  description,
  linkButton,
  textButton,
  price,
}) => {
  return (
    <div className="w-44 h-80 bg-gray-100 flex flex-col justify-evenly items-center py-1 px-2 rounded-xl shadow-md shadow-gray-300 hover:scale-105 duration-300">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-2/5"
      />
      <h3 className="text-center font-semibold text-sm">{title}</h3>
      <p className="text-center text-sm  font-medium">${price}</p>
      <p className="text-center text-xs">{description}</p>
      <Button
        text={textButton}
        color="primary"
        link={linkButton}
        message={title}
      />
    </div>
  );
};
