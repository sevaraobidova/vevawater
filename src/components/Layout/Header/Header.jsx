import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Menu from './MobileMenu';
import FormLocation from './FormLocation';
import Language from './HeaderLang';
import HeaderLogin from './HeaderLogin';
import logo from '/src/assets/images/logo.svg';
export default function Header() {
  return (

    <div className={` bg-[url('/src/assets/images/icons/wavy.svg')] bg-gray-light`}>

      <nav className='container mx-auto py-4  justify-between items-center '>

        <div className='flex flex-row items-center ' >
          {/* mobile menu */}
          <Menu size="hidden sm:block"/>
          <Link to="/" className='basis-1/3 items-center'> <img src={logo} alt="" /></Link>
          
          <ul className=' flex flex-row basis-1/2  self-center sm:hidden' >
            <li className='basis-1/3 font-link text-h4 ' >
              <NavLink to='/' className='text-gray-inactive  aria-[current=page]:activeLink '>
                Главная
              </NavLink>

        </li>
          <li className='basis-1/3 font-link text-h4 '>
            <NavLink to='/shop' className='text-gray-inactive aria-[current=page]:activeLink '>Магазин товаров</NavLink>

            </li>
          </ul>
          <FormLocation size="basis-1/2 sm:hidden" />
          <div className='basis-1/3 flex items-center gap-1'>
            <Language size=" basis-1" />
            <HeaderLogin size="" />
          </div>

        </div>
        <FormLocation/>
      </nav>
    </div>
  )
}
