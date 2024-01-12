// ShoppingCartLeft.jsx
import React from 'react';
import AddToCart from './components/AddToCart/AddToCart';
import OrderAddress from './components/OrderAddress/OrderAddress';
import OrderDate from './components/OrderDate/OrderDate';
import Payment from './components/Payment/Payment';

export default function ShoppingCartLeft() {
  return (
    <div className="w-[73%] sm:w-[100%]">
        <AddToCart/>
        <OrderAddress/>
        <OrderDate/>
        <Payment/>
    </div>
  );
}