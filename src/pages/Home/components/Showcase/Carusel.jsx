import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Plus,X } from "lucide-react";
import { Navigation } from "swiper/modules";
import MyButton from "../../../../components/global/Button/Button";
import img from "../../../../assets/images/cooler.webp";
import img1 from "../../../../assets/images/waterdish.webp";
import img2 from "../../../../assets/images/pompa.webp";
import CaruselController from "./CaruselController";
import WaterDetail from "./WaterDetail/WaterDetail";

export default function Carusel() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
 const [isVisible, setIsVisible] = useState(false);
  const toggleElementVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiper]);
  const data = [img, img1, img2];

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        navigation={{
          nextEl: ".swiper-buttom-next",
          prevEl: ".swiper-buttom-prev",
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        modules={[Navigation]}
        className="mySwiper overflow-hidden"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              opacity: activeIndex === index ? 1 : 0.45,
              transform: activeIndex === index ? "scale(1.2 )" : "scale(1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 2,
            }}
            className={`${
              activeIndex === index ? "swiper-slide-active" : ""
            } relative bg-center bg-cover p-10`}
          >

            <img src={item} className="w-72 h-96 object-contain pb-4" />
            {index === 1 && isVisible && <WaterDetail />}
            {index === 1 && (
              <div
                className="absolute top-[19%] right-[28%] bg-white rounded-full p-1 text-blue"
                onClick={toggleElementVisibility}
              >
                {isVisible ? <X size={30} /> : <Plus size={30} />}
              </div>
            )}
            {activeIndex === index && (
              <MyButton
                link="type here your link address"
                shadow='yes'
              >
                Заказать
              </MyButton>
            )}

          </SwiperSlide>
        ))}
        <CaruselController />
      </Swiper>
    </>
  );
}
