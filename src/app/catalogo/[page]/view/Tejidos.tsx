import React from "react";
import { CardProductCat } from "../CardProductCat";
import { tejidosArray } from "@/app/utils/ArrayProducts/tejidos";

const Tejidos = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center lg:justify-start  gap-4 ">
      {tejidosArray.map((e, i) => (
        <CardProductCat
          key={i}
          image={e.image}
          title={e.name}
          description={e.description}
          linkButton={e.link}
          textButton={e.labelButton}
        />
      ))}
    </div>
  );
};

export default Tejidos;
