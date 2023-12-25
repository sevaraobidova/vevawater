import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import MyButton from "../global/Button/Button";

import img from '../../assets/images/cooler.webp'
import img1 from "../../assets/images/waterdish.webp";
import img2 from "../../assets/images/pompa.webp";

export default function Carusel() {

    const data = [img, img1, img2]
  return (
    <>
      <Swiper
        spaceBetween={100}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-buttom-next",
          prevEl: ".swiper-buttom-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} className="swiper-image" />
            <MyButton link="type here your link address">Заказать</MyButton>
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-buttom-prev slider-arrow">
            <FaArrowLeft
              size={30}
              color="black"
              className="absolute top-[50%] left-[25%] z-30"
            />
          </div>
          <div className="swiper-buttom-next slider-arrow">
            <FaArrowRight
              size={30}
              color="black"
              className="absolute top-[50%] right-[25%] z-30"
            />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}
