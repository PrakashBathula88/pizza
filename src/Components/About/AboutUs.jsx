import React from "react";
import "../About/About.css";
export default function AboutUs() {
  return (
    <div>
      <h1 className="About">About Us</h1>
      <h1 className="About">The Story Of La Pinoz's Pizza</h1>
      <div>
        <p className="paragraph">
          {" "}
          The story of India's fastest growing pizza place started back in 2011
          when Sanam Kapoor opened his very first pizzeria in his hometown
          Chandigarh. Inspired by his own search for delicious pizza options, he
          started to wonder if there was a better way of doing pizza – and
          business. The last thing the world needed was another pizzeria, but
          maybe this one could be different and everyone could get exactly what
          they wanted, made fresh on demand. It all started sounding pretty
          great, and soon Sanam was opening the first La Pinoz in his hometown
          Chandigarh and there was no looking back. As of today, La Pino'z has
          600+ outlets across India with the recent one opening in London.
        </p>
        <img src="https://lapinoz.ca/assets/wla_new/lapinoz/img/sanam-kapoor.jpg" className="img-la"  alt="Loading..."></img>
      </div>
      <img src="https://static.uengage.in/uploads/5/image-495312-1709794368.jpeg" className="img-coupon"  alt="Loading..."></img>
    </div>
  );
}
