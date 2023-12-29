import React from 'react'
import AboutCard from './AboutCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import {Autoplay} from 'swiper/modules';
import cardData from './CardData';
export default function AboutGrid() {
  return (
    <>
    <div className='grid grid-cols-2 grid-rows-3 gap-3 w-[73%] sm:hidden'>
      {
        cardData.map((item, i)=> (<AboutCard key={i} title={item.title} description={item.description} class={item.class}/>))
      }
    </div>
    <Swiper
    modules={[Autoplay]}
    autoplay={true}
    spaceBetween={0}
    slidesPerView={1}
    >
    {
        cardData.map((item, index)=> (<SwiperSlide >
          <AboutCard key={index} title={item.title} description={item.description} class={item.width}/>
        </SwiperSlide>))
      }
    </Swiper>
    </>
  )
}