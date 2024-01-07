import React from 'react'
import { MoveRight, MoveLeft, Plus } from "lucide-react";
export default function CaruselController() {
  return (
   
      <div className="slider-controller">
        <div className="swiper-buttom-prev slider-arrow">
          <MoveLeft
            color="black"
            size={46}
            className="absolute top-[40%] left-[19%] z-30 sm:z-1 "
          />
        </div>
        <div className="swiper-buttom-next slider-arrow">
          <MoveRight
            color="black"
            size={46}
            className="absolute top-[40%] right-[19%] z-30"
          />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    
  );
}
