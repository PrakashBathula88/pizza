//NewlaunchProducts

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../Slider/Simple.css";
import "../Slider/Simple.css";
import React from "react";
import Slider from "react-slick";

export default function NewlaunchProducts() {
  const settings = {
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
      <div style={{ backgroundColor: "#f2f1f1" }}>
        <div>
          <h1
            style={{
              marginLeft: "152px",
              color: "#201c1d",
              font: "24px",
            }}
          >
            Best Sellers
          </h1>
        </div>

        <Slider {...settings} className="simple-slider">
          <div
          >
            <img
              src="https://static.uengage.in/uploads/5/image-711224-1715596629.png"
              alt="1"
              className="slider-image"
            ></img>
            <div style={{ border: "2px solid white",backgroundColor:"white",color:" #0f572d" }}>
              <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>
                Farm villa Pizza
              </h4>
              <h5 style={{ marginLeft: "80px" }}>
                The Freshness of Capsicum Food
              </h5>
            </div>
          </div>
          <div>
            <img
              src="https://static.uengage.in/uploads/5/image-916317-1715596630.png"
              alt="1"
              className="slider-image"
            ></img>
             <div style={{ border: "2px solid white",backgroundColor:"white",color:" #0f572d" }}>
              <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>
               Burn to Hell Pizza
              </h4>
              <h5 style={{ marginLeft: "80px" }}>
                A Fiery and lethal Combination
              </h5>
            </div>
          </div>
          <div>
            <img
              src="https://static.uengage.in/uploads/5/image-462226-1715686799.png"
              alt="1"
              className="slider-image"
            ></img>
             <div style={{ border: "2px solid white",backgroundColor:"white",color:" #0f572d" }}>
              <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>
                Cheezy-7 Pizza
              </h4>
              <h5 style={{ marginLeft: "80px" }}>
               An Exotic Combination 0f White
              </h5>
            </div>
          </div>
          <div>
            <img
              src="https://static.uengage.in/uploads/5/image-183435-1715686808.png"
              alt="1"
              className="slider-image"
            ></img>
             <div style={{ border: "2px solid white",backgroundColor:"white",color:" #0f572d" }}>
              <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>
              Burn to Hell Pizza
              </h4>
              <h5 style={{ marginLeft: "80px" }}>
                The Freshness of Capsicum Food
              </h5>
            </div>
          </div>
          <div>
            <img
              src="https://static.uengage.in/uploads/5/image-795561-1715596629.png"
              alt="1"
              className="slider-image"
            ></img>
             <div style={{ border: "2px solid white",backgroundColor:"white",color:" #0f572d" }}>
              <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>
                Farm villa Pizza
              </h4>
              <h5 style={{ marginLeft: "80px" }}>
                The Freshness of Capsicum Food
              </h5>
            </div>
          </div>
          <div>
            <img
              src="https://static.uengage.in/uploads/5/image-183435-1715686808.png"
              alt="1"
              className="slider-image"
            ></img>
             <div style={{ border: "2px solid white",backgroundColor:"white",color:" #0f572d" }}>
              <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>
              Burn to Hell Pizza
              </h4>
              <h5 style={{ marginLeft: "80px" }}>
                The Freshness of Capsicum Food
              </h5>
            </div>
          </div>
          <div>
            <img
              src="https://static.uengage.in/uploads/5/image-9895-1654600609.jpg"
              alt="1"
              className="slider-image"
            ></img>
             <div style={{ border: "2px solid white",backgroundColor:"white",color:" #0f572d" }}>
              <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>
                Farm villa Pizza
              </h4>
              <h5 style={{ marginLeft: "80px" }}>
                The Freshness of Capsicum Food
              </h5>
            </div>
          </div>
          <div>
            <img
              src="https://static.uengage.in/uploads/5/image-183435-1715686808.png"
              alt="1"
              className="slider-image"
            ></img>
             <div style={{ border: "2px solid white",backgroundColor:"white",color:" #0f572d" }}>
              <h4 style={{ marginLeft: "110px", fontSize: "20px" }}>
              Burn to Hell Pizza
              </h4>
              <h5 style={{ marginLeft: "80px" }}>
                The Freshness of Capsicum Food
              </h5>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
