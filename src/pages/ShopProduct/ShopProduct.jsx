import React from "react";
import { useParams } from "react-router-dom";
import { appFetch } from "../../utilities/api";
import { useQuery } from "@tanstack/react-query";
import ShopCard from "./components/ShopCard";

export default function ShopProduct() {
  const { productId } = useParams();

  // const {
  //   data: products,
  //   isPending,
  //   isError,
  // } = useQuery({
  //   queryKey: ["products", productId],
  //   queryFn: async () => {
  //     const res = await appFetch(`/product/category/${productId}`);

  //     return res || [];
  //   },
  // });

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-6">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
}
