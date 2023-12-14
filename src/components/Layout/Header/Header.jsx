import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '/src/assets/images/logo.svg'
export default function Header() {
  return (
    <div className='container mx-auto py-4 '>

    <div className='flex flex-row' >
      <a className='basis-1/4 ' href=""><Link><img src={logo} alt="" /></Link></a>
      <ul className=' flex flex-row basis-1/2 ' >
        <li className='basis-1/4 font-link text-h4 underline' >
          <NavLink to='/'>Главная</NavLink>

        </li>
          <li className='basis-1/3 font-link text-h4 underline'>
          <NavLink to='/shop'>Магазин товаров</NavLink>

        </li>
      </ul>
      <form className='basis-1/4'>
        <input type="text" placeholder='location' />
      </form>
      <form className='basis-1/4' action="">  <button>Войти в кабинет</button></form>
    </div>
    </div>
  )
}
