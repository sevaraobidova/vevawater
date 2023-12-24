import React from "react";
import { useParams } from "react-router-dom";

export default function ShopProduct() {
  const { productId } = useParams();

  return (
    <div className="container">
      <h1>shop productId {productId}</h1>
    </div>
  );
}
