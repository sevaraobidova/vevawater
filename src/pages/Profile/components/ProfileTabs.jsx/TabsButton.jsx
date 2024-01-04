import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function TabsButton(props) {
    const location = useLocation();
    const isActive = location.pathname === `/profile/${props.link}`;
  return (
     <Link to={props.link} className={`text-[#98A2B3] rounded-t-[10px] px-[24px] py-[14px] sm:p-0 text-[14px] font-bold flex ${isActive ? 'text-black bg-[#F2F4F7] sm:bg-white' : ''}`}>{props.name}{props.number && (<p className='text-white bg-[#E9573F] flex justify-center items-center rounded-full text-[12px] px-[7px] ml-[10px]'>{props.number}</p>)}</Link>
  )
}
