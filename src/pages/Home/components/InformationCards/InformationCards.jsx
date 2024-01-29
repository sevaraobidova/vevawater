import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// import required modules
import { EffectCreative } from "swiper/modules";
import "swiper/css/pagination";

import img from "../../../../assets/images/home.png";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import MyButton from "../../../../components/global/Button/Button";

export default function InformationCards() {
  const info = [
    { img: img, heading: "Круглосуточная доставка", number: "24/7" },
    { img: img, heading: "Круглосуточная доставка", number: "24/7" },
    { img: img, heading: "Круглосуточная доставка", number: "24/7" },
  ];
  const linearGradientStyle = {
    backgroundImage:
      "linear-gradient(to right, rgba(0, 117, 202, 1), rgba(36, 111, 165, 1))",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    paddingLeft: "3rem",
    // Add other styles as needed
  };
  const flexBegin = {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "red",
  };
  return (
    <div
      style={flexBegin}
      className="container mt-[60px] mb-[80px] flex justify-start items-start bg-blue"
    >
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="mySwiper3 w-[80%] h-auto rounded-[40px] relative left-0"
      >
        {info.map((item, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide
            rounded-xl text-6xl  text-white"
            style={linearGradientStyle}
          >
            <div className="text flex flex-col gap-14 font-light">
              <h1>
                {item.heading} <span className="font-black">{item.number}</span>
              </h1>
              <MyButton
                link="type here your link address"
                backgroundColor="white"
                shadow="yes"
              >
                Заказать
              </MyButton>
            </div>
            <img src={item.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
