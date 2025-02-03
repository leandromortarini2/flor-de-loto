import React from "react";
import { CardProductCat } from "../CardProductCat";
import { sahumeriosArray } from "@/app/utils/ArrayProducts/sahumerios";

export const Sahumerios = () => {
  return (
    <div
      id="sahumerios"
      className="w-full min-h-screen flex  justify-center items-center  flex-wrap lg:justify-start  gap-4"
    >
      {sahumeriosArray.map((e, i) => (
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
