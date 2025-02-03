import Link from "next/link";
import React from "react";
import { whstappRedirection } from "../hooks/whatsappRedirection";
interface IProp {
  text: string;
  color: "primary" | "secondary";
  icon?: React.ReactNode;
  classButton?: string;
  link: string;
  message?: string | undefined;
  title?: string;
}

export const Button: React.FC<IProp> = ({
  text,
  color,
  icon,
  classButton,
  link,
  message,
  title,
}) => {
  const handleOnCkick = ({
    label,
    message,
  }: {
    label: string;
    message?: string | undefined;
  }) => {
    if (label === "Pedir") {
      whstappRedirection(message);
    }
  };
  return (
    <>
      {title ? (
        <Link href={`${link}/${title}`}>
          <button
            className={`rounded-xl flex justify-center items-center  px-3 py-1 text-base   font-textSecondary ${
              color === "primary"
                ? "bg-fucsia text-white hover:bg-hoverFucsia duration-100"
                : "bg-white text-fucsia hover:bg-hoverWhite duration-150 "
            } ${classButton && classButton}`}
            onClick={() => handleOnCkick({ label: text, message })}
          >
            {text}
            <div className="hidden md:flex !text-2xl">{icon}</div>
          </button>
        </Link>
      ) : (
        <Link href={link}>
          <button
            className={`rounded-xl flex justify-center items-center  px-3 py-1 text-base   font-textSecondary ${
              color === "primary"
                ? "bg-fucsia text-white hover:bg-hoverFucsia duration-100"
                : "bg-white text-fucsia hover:bg-hoverWhite duration-150 "
            } ${classButton && classButton}`}
            onClick={() => handleOnCkick({ label: text, message })}
          >
            {text}
            <div className="hidden md:flex !text-2xl">{icon}</div>
          </button>
        </Link>
      )}
    </>
  );
};
