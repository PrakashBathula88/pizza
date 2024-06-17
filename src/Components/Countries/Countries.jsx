import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Countries/Countries.css";
import "../Slider/Simple.css";
import Slider from "react-slick";
export default function Countries() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 200,
    cssEase: "linear",
  };
  return (
    <div>
      <h3 className="Loveing">Loved Across India</h3>
      <h3 className="Loved">Now Launching In Over 10 Countries</h3>

      <Slider {...settings} className="simple-slider">
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/thailand.jpg"
            alt="1"
            className="slider-image"
          ></img>
          <h2>Thailand</h2>
        </div>
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/nepal.jpg"
            alt="1"
            className="slider-image"
          ></img>
          <h2>Nepal</h2>
        </div>
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/switzerland.jpg"
            alt="1"
            className="slider-image"
          ></img>
          <h2>Switzerland</h2>
        </div>
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/india.jpg"
            alt="1"
            className="slider-image"
          ></img>
          <h2>India</h2>
        </div>
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/uk.jpg"
            alt="1"
            className="slider-image"
          ></img>
          <h2>Uk</h2>
        </div>
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/canada.jpg"
            alt="1"
            className="slider-image"
          ></img>
          <h2>Canada</h2>
        </div>
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/australia.jpg"
            alt="1"
            className="slider-image"
          ></img>
          <h2>Australia</h2>
        </div>
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/dubai.jpg"
            alt="1"
            className="slider-image"
          ></img>
          <h2>Dubai</h2>
        </div>
        <div>
          <img
            src="https://lapinoz.ca/assets/wla_new/lapinoz/ca/images/tanzania.jpg"
            alt="Loading...."
            className="slider-image"
          ></img>
          <h2>Tanzania</h2>
        </div>
      </Slider>
    </div>
  );
}
