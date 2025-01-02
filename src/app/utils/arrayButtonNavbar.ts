import { IconType } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
export interface INavbarButton {
  label: string;
  link: string;
  options?: {
    label: string;
    icon?: IconType; //IconType es el tipo de dato que proporsiona react-icon
    link: string;
  }[];
}
export const navbarButton: INavbarButton[] = [
  {
    label: "Inicio",
    link: "",
  },
  {
    label: "Conocenos",
    link: "",
  },
  {
    label: "Productos",
    link: "",
  },
  {
    label: "Catalogo",
    link: "",
    options: [
      {
        label: "Sahumerios",

        link: "",
      },
      {
        label: "Porta Sahumerios",

        link: "",
      },
    ],
  },
  {
    label: "Contacto",
    link: "",
    options: [
      {
        label: "Facebook",
        icon: FaFacebookSquare,
        link: "",
      },
      {
        label: "Instagram",
        icon: SiInstagram,
        link: "",
      },
    ],
  },
];
