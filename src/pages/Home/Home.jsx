import React from 'react'
import '../../index.css'
import About from './components/About/About'
import Telegram from '../../components/Layout/Footer/components/Telegram'
import Showcase from './components/Showcase/Showcase';

export default function Home() {
  return (
    <div className=" bg-indigo-500 text-red">
      <Showcase />
      <div className="wave z-0 static"></div>
      <About />
      <Telegram
        bg={`bg-blue w-full hidden `}
        visibility="block"
        color="white"
      />
    </div>
  );
}
