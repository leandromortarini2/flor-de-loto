import React from "react";
import { CardProductCat } from "../CardProductCat";
import { sahumadosArray } from "@/app/utils/ArrayProducts/sahumado";

export const Sahumado = () => {
  return (
    <div
      id="sahumerios"
      className="w-full min-h-screen flex justify-center lg:justify-start items-start  flex-wrap   gap-4"
    >
      {sahumadosArray.map((e, i) => (
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
