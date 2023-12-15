import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '/src/assets/images/logo.svg'
export default function Header() {
  return (
    <div className='container mx-auto py-4 justify-between '>

    <div className='flex flex-row' >
      <Link to="/" className='basis-1/3'> <img src={logo} alt="" /></Link>
      <ul className=' flex flex-row basis-1/2 ' >
        <li className='basis-1/4 font-link text-h4 ' >
            <NavLink to='/' className='text-gray-inactive  aria-[current=page]:activeLink '>
              Главная
            </NavLink>

        </li>
          <li className='basis-1/3 font-link text-h4 '>
            <NavLink to='/shop' className='text-gray-inactive aria-[current=page]:activeLink '>Магазин товаров</NavLink>

        </li>
      </ul>
      <form className='basis-1/4'>
        <input type="text" placeholder='your location' />
      </form>
      <form className='basis-1/4' action="">  <button>Войти в кабинет</button></form>
    </div>
    </div>
  )
}
