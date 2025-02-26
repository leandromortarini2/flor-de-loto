import { whstappRedirection } from "@/app/hooks/whatsappRedirection";
import React from "react";
interface IProp {
  text: string;
  color: "primary" | "secondary";
  icon?: React.ReactNode;
  classButton?: string;
  link: string;
  message?: string | undefined;
  title?: string;
  size?: string | undefined;
}
export const ButtonCardCat: React.FC<IProp> = ({
  text,
  icon,
  color,
  classButton,
  message,
  size,
}) => {
  const handleOnCkick = ({
    label,
    message,
  }: {
    label: string;
    message?: string | undefined;
  }) => {
    if (label === "Pedir") {
      whstappRedirection(message, size);
    }
  };
  return (
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
  );
};
