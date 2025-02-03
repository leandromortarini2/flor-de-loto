import { lamparaSalArray } from "@/app/utils/ArrayProducts/lamparaSal";
import React from "react";
import { CardProductCat } from "../CardProductCat";

const LamparaSal = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center lg:justify-start  gap-4 ">
      {lamparaSalArray.map((e, i) => (
        <CardProductCat
          key={i}
          image={e.image}
          title={e.name}
          description={e.description}
          linkButton={e.link}
          textButton={e.labelButton}
          price={e.price}
        />
      ))}{" "}
    </div>
  );
};

export default LamparaSal;
