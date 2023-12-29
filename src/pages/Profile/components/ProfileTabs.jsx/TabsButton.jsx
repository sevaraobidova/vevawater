import React from 'react'
import { Button } from '../../../../components/ui/button'
import { Link, useLocation } from 'react-router-dom'

export default function TabsButton(props) {
    const location = useLocation();
    const isActive = location.pathname === `/profile/${props.link}`;
  return (
      <Button asChild className={`text-[#98A2B3] rounded-t-[10px] rounded-b-none  px-[24px] ${
        isActive ? 'text-black bg-[#F2F4F7]' : ''
      }`}><Link to={props.link} className='text-[14px] text-center'>{props.name}{props.number && (
        <p className='text-white bg-[#E9573F] flex justify-center items-center rounded-full text-[12px] px-[7px] ml-[10px]'>
          {props.number}
        </p>
      )}</Link></Button>
  )
}
