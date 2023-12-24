import React from "react";
import { useParams } from "react-router-dom";
import { appFetch } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";

export default function ShopProduct() {
  const { productId } = useParams();

  const {
    data: products,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: async () => {
      const res = await appFetch(`/product/category/${productId}`);

      return res || [];
    },
  });

  return (
    <div className="container">
      <h1>shop productId {productId}</h1>

      <div></div>
    </div>
  );
}
