import { alertNavbar } from "@/app/hooks/useAlertNavbar";
import React from "react";
import { IconType } from "react-icons";
interface IProp {
  link: string;
  icon?: IconType;
  label: string;
}

export const ButtonIcon: React.FC<IProp> = ({ link, icon: Icon, label }) => {
  const handleClick = ({
    link,
    label,
  }: {
    link: string | undefined;
    label: string;
  }) => {
    alertNavbar({ label, finalLink: link || "/", labelDad: "" });
  };
  return (
    <button
      onClick={() =>
        handleClick({
          label,
          link,
        })
      }
      aria-label={label}
    >
      {Icon ? <Icon className="text-rosa text-3xl" /> : null}
    </button>
  );
};
