import React from "react";
import Carusel from "./Carusel";
import img from '../../../../assets/images/everest.png'
import WaterDetail from "./WaterDetail/WaterDetail";

export default function Showcase() {
  return (
    <div
      className="bg-no-repeat bg-center h-screen  pt-25 overflow-hidden bg-[#E4EAF3]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <Carusel />
    </div>
  );
}
