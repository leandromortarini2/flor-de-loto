import Link from "next/link";
import React from "react";
interface IProp {
  text: string;
  color: "primary" | "secondary";
  icon?: React.ReactNode;
  classButton?: string;
  link: string;
}

export const Button: React.FC<IProp> = ({
  text,
  color,
  icon,
  classButton,
  link,
}) => {
  return (
    <Link href={link}>
      <button
        className={`rounded-xl flex justify-center items-center  px-4 py-2 text-base xl:text-lg  font-textSecondary ${
          color === "primary"
            ? "bg-fucsia text-white hover:bg-hoverFucsia duration-100"
            : "bg-white text-fucsia hover:bg-hoverWhite duration-150 "
        } ${classButton && classButton}`}
      >
        {text}
        <div className="hidden md:flex !text-2xl">{icon}</div>
      </button>
    </Link>
  );
};
