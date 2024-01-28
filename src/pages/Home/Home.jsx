import React from 'react'
import '../../index.css'
import About from './components/About/About'
import Telegram from '../../components/Layout/Footer/components/Telegram'
import Showcase from './components/Showcase/Showcase';
import InformationCards from './components/InformationCards/InformationCards';

export default function Home() {
  return (
    <div>
      <Showcase />
      <div className="wave1 z-0 static"></div>
      <InformationCards />
      <About />
      <Telegram
        bg={`bg-blue w-full hidden `}
        visibility="block"
        color="white"
      />
    </div>
  );
}
