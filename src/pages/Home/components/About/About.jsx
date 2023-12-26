import React from 'react'
import AboutGrid from './AboutGrid';
import WaterDrop from './WaterDrop';

export default function About() {
  return (
    <div className='container mx-auto flex justify-between mt-[60px] mb-[80px]'>
      <AboutGrid/>
      <WaterDrop/>
    </div>
  )
}
