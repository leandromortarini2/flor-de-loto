import Link from "next/link";
import React from "react";
interface IProp {
  text: string;
  icon?: React.ReactNode;
  classButton?: string;
  link: string;
  message?: string | undefined;
  title?: string;
}
export const ButtonLanding: React.FC<IProp> = ({
  text,

  link,
}) => {
  return (
    <Link href={link}>
      <button className="button capitalize">
        {text}
        <div className="hoverEffect">
          <div></div>
        </div>
      </button>
    </Link>
  );
};
