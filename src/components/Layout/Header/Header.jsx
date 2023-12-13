import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../../ui/button'


export default function Header() {
  return (
    <div className='container mx-auto py-4 '>

      <div className='flex flex-row' >
        <a className='basis-1/4 ' href=""><Link><img src="" alt="logo" /></Link></a>
        <ul className=' flex flex-row basis-1/2 ' >
          <li className='basis-1/4 font-link text-h4 underline' >
            <NavLink to='/'>Главная</NavLink>

          </li>
          <li className='basis-1/3 font-link text-h4 underline'>
            <NavLink to='/shop'>Магазин товаров</NavLink>

          </li>
        </ul>
        <Button>send</Button>
        <form className='basis-1/4'>
          <input type="text" placeholder='location' />
        </form>
        <form className='basis-1/4' action="">  <button>Войти в кабинет</button></form>
      </div>
    </div>
  )
}
