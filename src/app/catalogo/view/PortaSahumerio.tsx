import { portaSahumeriosArray } from "@/app/utils/ArrayProducts/portaSahumerio";
import React from "react";
import { CardProductCat } from "../CardProductCat";

const PortaSahumerio = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center lg:justify-start  gap-4 ">
      {portaSahumeriosArray.map((e, i) => (
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

export default PortaSahumerio;
