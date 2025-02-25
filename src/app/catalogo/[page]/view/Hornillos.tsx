import React from "react";
import { CardProductCat } from "../CardProductCat";
import { hornillosArray } from "@/app/utils/ArrayProducts/hornillos";

const Hornillos = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center lg:justify-start  gap-4 ">
      {hornillosArray.map((e, i) => (
        <CardProductCat
          key={i}
          image={e.image}
          title={e.name}
          description={e.description}
          linkButton={e.link}
          textButton={e.labelButton}
        />
      ))}{" "}
    </div>
  );
};

export default Hornillos;
