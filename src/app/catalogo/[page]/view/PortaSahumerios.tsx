import React from "react";
import { CardProductCat } from "../CardProductCat";
import { portaSahumeriosArray } from "@/app/utils/ArrayProducts/portaSahumerio";

const PortaSahumerios = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center lg:justify-start  gap-4 ">
      {portaSahumeriosArray.map((e, i) => (
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

export default PortaSahumerios;
