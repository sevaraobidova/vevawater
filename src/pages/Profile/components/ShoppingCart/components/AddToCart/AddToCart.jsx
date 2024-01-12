// ShoppingCartLeft.jsx
import React, { useState } from 'react';
import Title from '../../../Title';
import ShopCard from "../../../../../ShopProduct/components/ShopCard";

export default function AddToCart() {
  // const [cart, setCart] = useState([]);

  // const onAddToCart = (product) => {
  //   setCart(currentCart => [...currentCart, product]);
  //   console.log("Added to cart:", product);
  // };

  // // just a Sample
  // const sampleProduct = {
  //   id: 1,
  //   name: "Sample Product",
  //   price: "15 000 сум"
  // };
  
  return (
    <div>
      <Title text='Моя корзина'/>
      {/* <div>
        <ShopCard product={sampleProduct} onAddToCart={onAddToCart} />
      </div> */}
    </div>
  );
}