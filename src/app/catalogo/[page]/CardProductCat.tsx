import { whstappRedirection } from "@/app/hooks/whatsappRedirection";
import Image from "next/image";
import React from "react";
interface CardProductCatProps {
  image: string;
  title: string;
  description: string;

  size: string;
}
export const CardProductCat: React.FC<CardProductCatProps> = ({
  image,
  title,
  description,
  size,
}) => {
  const handleWP = (menssage: string, size: string) => {
    whstappRedirection(menssage, size);
  };
  return (
    <div className=" w-[300px] lg:w-[250px] lg:h-[450px] xl:h-[500px] xl:w-[300px] flex flex-col gap-2 border-2 p-2 shadow-xl">
      <div>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="opacity-90"
        />
      </div>
      <div className="px-2 flex flex-col gap-2">
        <h3 className="md:text-lg xl:text-xl text-fucsiaClaro  uppercase tracking-wider">
          {title}
        </h3>
        <p className=" font-medium text-violet tracking-wider ">
          Material: <span className="font-light  text-sm ">{description}</span>{" "}
        </p>
        <p className=" font-medium text-violet tracking-wider ">
          Tamaño: <span className="font-light  text-sm capitalize">{size}</span>
        </p>
      </div>
      <div className="w-full flex justify-center items-end pb-2 h-full">
        <button
          onClick={() => handleWP(title, size)}
          className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
          type="button"
        >
          <div className="bg-fuchsia-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#fff"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <p className="translate-x-2">Pedir</p>
        </button>
      </div>
    </div>
  );
};
