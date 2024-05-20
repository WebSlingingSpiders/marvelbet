import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import hero1 from "./assets/img/hero1.jpg";
import hero2 from "./assets/img/hero2.png";
import hero3 from "./assets/img/hero3.jpg";
import hero4 from "./assets/img/hero4.jpg";
import hero5 from "./assets/img/hero5.png";
import hero6 from "./assets/img/hero6.png";
import hero7 from "./assets/img/hero7.jpg";
import hero8 from "./assets/img/hero8.jpg";
import Left from "./assets/img/left-fav1.jpg";
import Left2 from "./assets/img/left-fav2.jpg";
import Right from "./assets/img/right-fav1.jpg";
import Card from "./components/Card";

import "./styles/slider.css";

const Body = () => {
  const HeroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];
  const leftFav = [Left, Left2];
  const rightFav = [Right];
  return (
    <div>
      <div className="h-auto">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {HeroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image} alt="hero"></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Marquee (Animation) */}
      <div className="post w-full bg-[#62090c] h-8 flex items-center font-semibold">
        <div className="container mx-auto">
          <div className="flex text-white overflow-x-hidden">
            <div className="relative flex">
              <svg
                fill="#f2f2f2"
                className="z-40 mx-2"
                width={30}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
              </svg>
              <ul className="flex animate-marquee whitespace-nowrap">
                <li className="mx-8">
                  Enjoy The MarvelBet Affiliate Program & Get a Flat 50% Monthly
                  Commission Life Time
                </li>
                <li className="mx-8">
                  MarvelBet is India&nbsp;s Best Cricket Betting Exchange
                  Platform. Sign Up For Your Free ID Today. Play With Free ₹777
                  Bonus. UPI Accepted.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-3">
        <div className="grid grid-cols-1 mx-3 md:mx-0 md:grid-cols-2 my-3 h-auto gap-4">
          <div className="card rounded-sm bg-[#ad0e14]">
            <Card>Favorites </Card>
            <div className="">
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {leftFav.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className="w-full border-2 border-[#ad0e14]"
                      src={image}
                      alt="left-fav"
                    ></Image>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="card rounded-sm bg-[#ad0e14]">
            <Card>Favorites </Card>
            <div className="">
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {rightFav.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className="w-full border-2 border-[#ad0e14]"
                      src={image}
                      alt="left-fav"
                    ></Image>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
