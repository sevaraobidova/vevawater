import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { MoveRight, MoveLeft } from "lucide-react";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import MyButton from "../../../../components/global/Button/Button";
import img from "../../../../assets/images/cooler.webp";
import img1 from "../../../../assets/images/waterdish.webp";
import img2 from "../../../../assets/images/pompa.webp";

export default function Carusel() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiper]);

  const handleSlideChange = (index) => {
    if (swiper && swiper.slideTo) {
      swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  const data = [img, img1, img2];

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={100}
        // effect={"coverflow"}
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
          <SwiperSlide
            key={index}
            style={{
              opacity: activeIndex === index ? 1 : 0.45, // Adjust the opacity
            }}
          >
            <img src={item} className="swiper-image" />
            {activeIndex === index ? <MyButton link="type here your link address">Заказать</MyButton> : ''}
          </SwiperSlide>
        ))}
        <div className="slider-controller">
          <div className="swiper-buttom-prev slider-arrow">
            <MoveLeft
              color="black"
              size={48}
              className="absolute top-[50%] left-[25%] z-30"
            />
          </div>
          <div className="swiper-buttom-next slider-arrow">
            <MoveRight
              color="black"
              size={48}
              className="absolute top-[50%] right-[25%] z-30"
            />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}
