import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Menu from './MobileMenu';
import FormLocation from './FormLocation';
import Language from './HeaderLang';
import HeaderLogin from './HeaderLogin';
import logo from '/src/assets/images/logo.svg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function Header() {
  const location = useLocation();
  const [isShopPage, setIsShopPage] = useState(false);
  
  useEffect(() => {
    setIsShopPage(location.pathname === '/shop');
  }, [location]);
  return (

    <div className={isShopPage ? 'wave' : 'bg-[#E4EAF3]'}>

      <nav className='container mx-auto py-4  justify-between items-center'>

        <div className='flex flex-row items-center justify-between  sm:justify-between ' >
          {/* mobile menu */}
          <div className='flex  gap-1 py-3 items-center'>
            <Menu  variant="hidden sm:block" />
            <Link to="/" > <img src={logo} alt="" /></Link>
         </div>
          
          <ul className=' flex flex-row  justify-between gap-10  self-center sm:hidden' >
            <li className='  font-link text-h4 ' >
              <NavLink to='/' className='text-gray-inactive  aria-[current=page]:activeLink '>
                Главная
              </NavLink>

        </li>
          <li className=' font-link text-h4 '>
            <NavLink to='/shop' className='text-gray-inactive aria-[current=page]:activeLink '>Магазин товаров</NavLink>

            </li>
          </ul>
          <FormLocation size=" sm:hidden" />
          <div className=' flex items-center gap-1'>
            <Language />
            <HeaderLogin  />
          </div>

        </div>
        <FormLocation size="" visibility="hidden sm:block"/>
      </nav>
    </div>
  )
}
