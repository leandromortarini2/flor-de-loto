import React from "react";
import { IconType } from "react-icons";
interface IProp {
  link: string;
  icon?: IconType;
  label: string;
}

export const ButtonIcon: React.FC<IProp> = ({ link, icon: Icon, label }) => {
  return (
    <a href={link} aria-label={label} target="_blank" rel="noopener noreferrer">
      {Icon ? <Icon className="text-rosa text-3xl" /> : null}
    </a>
  );
};
