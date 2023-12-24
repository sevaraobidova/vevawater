import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/src/assets/images/logo.svg'
import Contact from './Contact'
import Phone from './Phone'

export default function Footer() {
  return (
    <div>
      <div className='container mx-auto py-4 box-border gap-3 '>

        <div className='flex flex-row justify-between content-center' >
          <Link to="/" className='basis-1/3'> <img src={logo} alt="" /></Link>
          <ul className='flex flex-col basis-1/3 gap-y-2'>
            <li className='text-h6 font-roman'>VEVA ©</li>
            <li className='text-h6 font-roman'>Все права защищены. 2023</li>
          </ul>
          <ul className=' flex flex-col gap-y-2 basis-1/3'>
            <li className='text-h6 font-link underline '><Link>Договор оферты</Link></li>
            <li className='text-h6 font-link underline '><Link>Сертификаты</Link></li>
          </ul>
          <Contact size={'basis-1/2'}/>
          <Phone size={'basis-1/3'}/>
        </div>
      </div>
    </div>
  )
}
