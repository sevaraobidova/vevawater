import React from 'react'
import AboutGrid from './AboutGrid';
import WaterDrop from './WaterDrop';
import AboutMobile from './AboutMobile';

export default function About() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between mt-[60px] mb-[80px]'>
      <AboutGrid/>
      <WaterDrop/>
      </div>
      <AboutMobile/>
    </div>
  )
}
