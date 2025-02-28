import React from "react";
import { CardProductCat } from "../CardProductCat";
import { coleccionesArray } from "@/app/utils/ArrayProducts/colecciones";

const Colecciones = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center lg:justify-start  gap-4 ">
      {coleccionesArray.map((e, i) => (
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

export default Colecciones;
