import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


const SwiperComponent = ({ images, swiperConfig }) => {
  return (
    <Swiper {...swiperConfig} className="mySwiper">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="hero" className="hero-banner" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
