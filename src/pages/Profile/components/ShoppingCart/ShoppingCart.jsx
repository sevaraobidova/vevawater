// ShoppingCart.jsx
import React from 'react';
import ShoppingCartLeft from './ShoppingCartLeft';
import CardRight from './CardRight';


export default function ShoppingCart() {
  return (
    <div>
      <div className='container mx-auto flex justify-between mt-[60px] mb-[70px]'>
        <ShoppingCartLeft/>
        <CardRight/>
      </div>
    </div>
  );
}