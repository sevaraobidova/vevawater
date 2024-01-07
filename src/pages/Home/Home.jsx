import React from 'react'
import '../../index.css'
import About from './components/About/About'
import Telegram from '../../components/Layout/Footer/components/Telegram'
import Showcase from './components/Showcase/Showcase';

export default function Home() {
  return (
    <div>
      <Showcase />
      <div className="wave1 z-0 static"></div>
      <About />
      <Telegram
        bg={`bg-blue w-full hidden `}
        visibility="block"
        color="white"
      />
    </div>
  );
}
