import React from "react";
import { INavbarButton } from "../../utils/arrayButtonNavbar";
import { ButtonNavbar } from "./ButtonNavbar";
interface Iprop {
  arrayButton: INavbarButton[];
}

export const MenuHamburguer: React.FC<Iprop> = ({ arrayButton }) => {
  return (
    <div className=" w-1/2 absolute top-20 right-0  flex flex-col items-end rounded-b-2xl !rounded-r-none bg-black px-4 py-2  md:hidden">
      {arrayButton.map((e, i) => (
        <ButtonNavbar key={i} {...e} />
      ))}
    </div>
  );
};
