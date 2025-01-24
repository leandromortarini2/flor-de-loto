import React from "react";
import { IconType } from "react-icons";
import { toast } from "sonner";
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
    console.log(link);
    toast(`Serás redirigido a ${label}`, {
      cancel: {
        label: "Cancelar",
        onClick: () => console.log("Cancel!"),
      },
      action: {
        label: "Aceptar",
        onClick: () => {
          window.open(link, "_blank");
        },
      },
    });
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
