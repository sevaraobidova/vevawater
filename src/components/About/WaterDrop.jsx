import React from "react";
import gif from '../../assets/images/blq-blq.gif';
import water from '../../assets/images/water.webp'

export default function WaterDrop () {
    return (
        <div className="sm:hidden">
            <img src={water} alt="waterdrop" className="w-[270px] h-[367px] relative top-[367px] mt-[-367px]"/>
            <img src={gif} alt="gif" className="w-[270px] h-[367px]"/>
        </div>
    )
}