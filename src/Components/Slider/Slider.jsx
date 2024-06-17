import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slider/Simple.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div>
        <h1
          style={{
            marginLeft: "152px",
            color: "#201c1d",
            font: "24px",
          }}
        >
          Deals and Offers
        </h1>
      </div>

      <Slider {...settings} className="simple-slider">
        <div>
          <img
            src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner.jpg"
            alt="1"
            className="slider-image"
          ></img>
        </div>
        <div>
          <img
            src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner.jpg"
            alt="1"
            className="slider-image"
          ></img>
        </div>
        <div>
          <img
            src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-three.jpg"
            alt="1"
            className="slider-image"
          ></img>
        </div>
        <div>
          <img
            src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-three.jpg"
            alt="1"
            className="slider-image"
          ></img>
        </div>
        <div>
          <img
            src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-four.jpg"
            alt="1"
            className="slider-image"
          ></img>
        </div>
        <div>
          <img
            src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-four.jpg"
            alt="1"
            className="slider-image"
          ></img>
        </div>
        <div>
          <img
            src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner.jpg"
            alt="1"
            className="slider-image"
          ></img>
        </div>
        <div>
          <img
            src="https://lapinozpizza.in/assets/wla_new/lapinoz/img/deals-banner-two.jpg"
            alt="1"
            className="slider-image"
          ></img>
        </div>
      </Slider>
    </>
  );
}
