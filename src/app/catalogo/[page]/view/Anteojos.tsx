import React from "react";
import { CardProductCat } from "../CardProductCat";
import { anteojosArray } from "@/app/utils/ArrayProducts/anteojos";

const Anteojos = () => {
  return (
    <div
      id="cascadas"
      className="w-full min-h-screen flex flex-wrap justify-center md:justify-evenly lg:justify-start  gap-4   "
    >
      {anteojosArray.map((e, i) => (
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
export default Anteojos;
