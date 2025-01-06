import React from "react";
import { INavbarButtonMovile } from "../../utils/arrayButtonNavbar";
import { ButtonNavbar } from "./ButtonNavbar";
import { ButtonIcon } from "./ButtonIcon";
interface Iprop {
  arrayButton: INavbarButtonMovile[];
}

export const MenuHamburguer: React.FC<Iprop> = ({ arrayButton }) => {
  return (
    <div className=" w-2/3 absolute top-20 right-0 z-40  flex flex-col items-end rounded-b-2xl !rounded-r-none bg-violet/90 px-4 py-2  md:hidden">
      {arrayButton.map((e, i) => (
        <>
          <ButtonNavbar key={i} {...e} />
          {e?.label === "Contacto" && e.options && (
            <div className="w-full flex gap-4 justify-end py-2 px-3">
              {e &&
                e.options.map((option, index) => (
                  <ButtonIcon
                    key={index}
                    link={option.link}
                    icon={option.icon}
                    label={option.label}
                  />
                ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};
