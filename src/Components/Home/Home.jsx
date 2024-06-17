import React from "react";
import Image from "../Image/Image";
import SimpleSlider from "../Slider/Slider";
import AboutUs from "../About/AboutUs";
import Growthjourney from "../Growth/Growthjourney";
import Countries from "../Countries/Countries";
import Ingredients from "../Ingredients/Ingredients";
import Explore from "../Exoplore/Explore";
import Newlaunched from "../NewLaunched/Newlaunched";
export default function Home() {
  return (
    <div>
    
      <Image />
      <SimpleSlider />
      <AboutUs />
      <Growthjourney />
      <Countries />
      <Ingredients />
      <Explore />
      <Newlaunched />

    </div>
  );
}
