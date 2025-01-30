import { IconType } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
export interface INavbarButton {
  label: string;
  link?: string;
  options?: {
    label: string;
    icon?: IconType; //IconType es el tipo de dato que proporsiona react-icon
    link: string;
    rel?: string;
    target?: string;
  }[];
  handle?: (label: string) => void;
  title?: string;
  isOpen?: string;
}
export interface INavbarButtonMovile {
  label: string;
  link?: string;
  options?: {
    label: string;
    icon?: IconType; //IconType es el tipo de dato que proporsiona react-icon
    link: string;
    rel?: string;
    target?: string;
  }[];
}
export const navbarButton: INavbarButton[] = [
  {
    label: "Inicio",
    link: "#hero",
  },
  {
    label: "Conocenos",
    link: "#about",
  },
  {
    label: "Productos",
    link: "#products",
  },
  {
    label: "Catalogo",
    options: [
      {
        label: "Palo Santo",
        link: "/catalogo",
      },
      {
        label: "Lampara de sal",
        link: "/catalogo",
      },
      {
        label: "Porta Sahumerio",
        link: "/catalogo",
      },
      {
        label: "Cascada de humo",
        link: "/catalogo",
      },
    ],
  },
  {
    label: "Contacto",
    options: [
      {
        label: "Facebook",
        icon: FaFacebookSquare,
        link: "https://web.facebook.com/profile.php?id=100070364314628",
        rel: "noreferrer",
        target: "_blank",
      },
      {
        label: "Instagram",
        icon: SiInstagram,
        link: "https://www.instagram.com/flor_de_loto_aromas_y_color?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        rel: "noreferrer",
        target: "_blank",
      },
    ],
  },
];

export const navbarButtonMovile = [
  {
    label: "Inicio",
    link: "#hero",
  },
  {
    label: "Conocenos",
    link: "#about",
  },
  {
    label: "Productos",
    link: "#products",
  },
  {
    label: "Catalogo",
    link: "/catalogo",
  },
  {
    label: "Contacto",
    options: [
      {
        label: "Facebook",
        icon: FaFacebookSquare,
        link: "https://web.facebook.com/profile.php?id=100070364314628",
        rel: "noreferrer",
        target: "_blank",
      },
      {
        label: "Instagram",
        icon: SiInstagram,
        link: "https://www.instagram.com/flor_de_loto_aromas_y_color?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        rel: "noreferrer",
        target: "_blank",
      },
    ],
  },
];
