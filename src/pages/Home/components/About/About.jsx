import React from 'react'
import AboutGrid from './AboutGrid';
import WaterDrop from './WaterDrop';
import AboutMobile from './AboutMobile';

export default function About() {
  return (
    <div className='container mx-auto mt-[60px] mb-[80px]'>
      <div className='flex justify-between'>
      <AboutGrid/>
      <WaterDrop/>
      </div>
      <AboutMobile/>
    </div>
  )
}
