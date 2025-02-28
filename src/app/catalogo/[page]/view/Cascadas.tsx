import { cascadasArray } from "@/app/utils/ArrayProducts/cascadas";
import React from "react";
import { CardProductCat } from "../CardProductCat";

const Cascadas = () => {
  return (
    <div
      id="cascadas"
      className="w-full min-h-screen flex flex-wrap justify-center md:justify-evenly lg:justify-start  gap-4   "
    >
      {cascadasArray.map((e, i) => (
        <CardProductCat
          key={i}
          image={e.image}
          title={e.name}
          description={e.description}
          size={e.size}
        />
      ))}
    </div>
  );
};
export default Cascadas;
