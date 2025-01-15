import { products } from "@/app/utils/arrayProducts";
import React from "react";
import { ProductCard } from "./ProductCard";

export const Products: React.FC = () => {
  return (
    <div
      id="products"
      className="w-full min-h-screen  bg-white lg:bg-bgProducts py-20 bg-cover"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          img={product.image}
          title={product.name}
          description={product.description}
          link={product.link}
          label={product.labelButton}
          direction={product.direction}
        />
      ))}
    </div>
  );
};
