import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/src/assets/images/logo.svg'
import Contact from './Contact'
import Phone from './Phone'

export default function Footer() {
  return (
    <>
      <div className='container mx-auto py-4 box-border gap-3 sm:py-2 '>
        {/* divider line */}
        <hr class="my-10 h-0.5 border-t-0 bg-gray opacity-100 dark:opacity-50 sm:my-3" />

        <div className='flex flex-row gap-40 items-center  sm:gap-4 sm:justify-between' >

          <div className='flex gap-14  sm:flex-col-reverse sm:gap-y-2 '>
            <Link to="/" > <img src={logo} alt="logo" className='sm:hidden' /></Link>
            <ul className='flex flex-col gap-x-4 gap-y-2 sm:gap-x-0 sm:opacity-30'>
              <li className='text-h6 font-roman'>VEVA ©</li>
              <li className='text-h6 font-roman'>Все права защищены. 2023</li>
            </ul>
            <ul className=' flex flex-col gap-y-2'>
              <li className='text-h6 font-link underline '><Link>Договор оферты</Link></li>
              <li className='text-h6 font-link underline '><Link>Сертификаты</Link></li>
            </ul>
          </div>
          
          
          <div className='flex gap-14 sm:flex-col-reverse sm:gap-1.5 sm:items-end'>

            <Contact />
            <Phone position='right' />

          </div>

        </div>
      </div>
    </>
  )
}
