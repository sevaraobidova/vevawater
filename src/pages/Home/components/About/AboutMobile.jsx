import React from 'react'
import AboutCard from './AboutCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import {Autoplay} from 'swiper/modules';
import cardData from './CardData';
export default function AboutMobile () {
    return (
        <Swiper
        modules={[Autoplay]}
        autoplay={true}
        spaceBetween={0}
        slidesPerView={1}
        >
        {
            cardData.map((item, index)=> (<SwiperSlide key={index}>
              <AboutCard key={index} title={item.title} description={item.description} style='sm:w-full sm:h-[350px] hidden sm:block'/>
            </SwiperSlide>))
          }
        </Swiper>
    )
}