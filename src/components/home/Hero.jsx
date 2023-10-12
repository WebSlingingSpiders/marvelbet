import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import hero1 from "../../assets/img/hero1.jpg";
import hero2 from "../../assets/img/hero2.png";
import hero3 from "../../assets/img/hero3.jpg";
import hero4 from "../../assets/img/hero4.jpg";
import hero5 from "../../assets/img/hero3.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const HeroImages = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  return (
    <div className="hero-banner">
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
        <div class="post-icon"></div>
        <FontAwesomeIcon icon="fa-solid fa-volume-high" />
        <div class="marquee" id="marqueeRun">
          <ul
            id="main_runngin_msg_container"
            // style="transform: translate(-530px);"
          >
            <li
              id="running-31032"
              //   style="margin-right: 25px;"
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
              // style="margin-right: 25px;
              // "
              title="Welcome"
            >
              <span ui-key="webContent">
                <p>
                  <strong>
                    MarvelBet is India's Best Cricket Betting Exchange Platform.
                    Sign Up For Your Free ID Today.&nbsp;Play
                    With&nbsp;Free&nbsp;₹777&nbsp;Bonus. UPI Accepted.
                  </strong>
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
