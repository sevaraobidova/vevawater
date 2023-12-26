import React from 'react'
import '../../index.css'
import About from './components/About/About'
import Telegram from '../../components/Layout/Footer/components/Telegram'
export default function Home() {
  return (
    <div className='m-9 bg-indigo-500 text-red'>
      <h1>Home</h1>
      <About />
      
      <Telegram bg={`bg-blue w-full hidden `} visibility='block' color='white' />
    </div>
  )
}
