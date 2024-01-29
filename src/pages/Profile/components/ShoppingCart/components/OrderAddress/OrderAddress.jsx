import React from 'react';
import { Address } from './Address/Address';
import { NomerPodezd } from './NomerPodezd/NomerPodezd';
import { NomerTelephone } from './NomerTelephone/NomerTelephone';

export default function OrderAddress() {
  return (
    <div className='container mx-auto flex justify-between mb-[10px] sm:flex-col'>
        <Address/>
        <NomerPodezd/>
        <NomerTelephone/>
    </div>
  );
}