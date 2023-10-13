import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import SwiperComponent from "./SwiperComponents";
import LeftFav1 from "../../assets/img/left-fav1.jpg";
import LeftFav2 from "../../assets/img/left-fav2.jpg";
import RightFav1 from "../../assets/img/right-fav1.jpg";
const Favorites = () => {
  const heroImages = [LeftFav1, LeftFav2];
  const heroImagesright = [RightFav1];

  const swiperConfig = {
    loop: true,
    centeredSlides: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  };

  return (
    <section className="my-3 favorites">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div class="card main-wrap-sport">
              <div class="card-body">
                <p class="card-text">
                  <div className="d-flex justify-content-between">
                    <h3 className="">Favourites</h3>
                    <div className="d-flex align-items-center gap-3">
                      <BsArrowLeft className="text-black icon-direction" />{" "}
                      <BsArrowRight className="text-black icon-direction" />
                    </div>
                  </div>
                </p>
              </div>

              <SwiperComponent
                images={heroImages}
                swiperConfig={swiperConfig}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div class="card main-wrap-sport">
              <div class="card-body">
                <p class="card-text">
                  <div className="d-flex justify-content-between">
                    <h3 className="">Favourites</h3>
                    <div className="d-flex align-items-center gap-3">
                      <BsArrowLeft className="text-black icon-direction" />{" "}
                      <BsArrowRight className="text-black icon-direction" />
                    </div>
                  </div>
                </p>
              </div>

              <SwiperComponent
                images={heroImagesright}
                swiperConfig={swiperConfig}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
