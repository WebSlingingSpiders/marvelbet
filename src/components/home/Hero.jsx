import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero1 from "../../assets/img/hero1.jpg";
import hero2 from "../../assets/img/hero2.png";
import hero3 from "../../assets/img/hero3.jpg";
import hero4 from "../../assets/img/hero4.jpg";
import hero5 from "../../assets/img/hero5.png";
import hero6 from "../../assets/img/hero6.png";
import hero7 from "../../assets/img/hero07.jpg";
import hero8 from "../../assets/img/hero08.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const HeroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

const Hero = () => {
  return (
    <div className="hero-banner z-0">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {HeroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="hero" className="hero-banner" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div class="post">
        <div className="container overflow-hidden">
          <div class=" post-icon  relative z-40">
            <i class="fa-solid fa-volume-high"></i>
          </div>
          <div class=" marquee" id="marqueeRun">
            <ul id="main_runngin_msg_container">
              <li
                id="running-31032"
                className="me-5"
                title="The MarvelBet Affiliate Program"
              >
                <span ui-key="webContent">
                  <p>
                    <strong>
                      Enjoy The MarvelBet Affiliate Program &amp; Get a Flat 50%
                      Monthly Commission Life Time
                    </strong>
                  </p>
                </span>
              </li>
              <li
                id="running-20338"
                className="me-5"
                // "
                title="Welcome"
              >
                <span ui-key="webContent">
                  <p>
                    <strong>
                      MarvelBet is India's Best Cricket Betting Exchange
                      Platform. Sign Up For Your Free ID Today.&nbsp;Play
                      With&nbsp;Free&nbsp;₹777&nbsp;Bonus. UPI Accepted.
                    </strong>
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
