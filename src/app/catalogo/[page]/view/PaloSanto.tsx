import { paloSantoArray } from "@/app/utils/ArrayProducts/paloSanto";
import React from "react";
import { CardProductCat } from "../CardProductCat";

const PaloSanto = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-start lg:justify-start  gap-1 ">
      {paloSantoArray.map((e, i) => (
        <CardProductCat
          key={i}
          image={e.image}
          title={e.name}
          description={e.description}
          linkButton={e.link}
          textButton={e.labelButton}
          price={e.price}
        />
      ))}
    </div>
  );
};
export default PaloSanto;
