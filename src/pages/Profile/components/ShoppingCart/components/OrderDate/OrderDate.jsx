import React from 'react';
import { Date } from './Date/Date';
import { RadioOption } from './RadioOption/RadioOption';
import { PaymentOptions } from './PaymentOptions/PaymentOptions';

export default function OrderDate() {
  return (
    <div className='container mx-auto flex justify-between pb-[15px] sm:flex-col'>
        <Date/>
        <RadioOption/>
        <PaymentOptions/>
    </div>
  );
}