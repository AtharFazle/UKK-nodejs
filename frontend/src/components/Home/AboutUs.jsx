import React from "react";
import AboutUsImg from "../../assets/AboutUsImg.jpg";

const AboutUs = () => {
  return (
    <div class="flex flex-wrap mr-24">
      <div class="w-1/2 mr-auto h-12 flex flex-justify-center items-center">
        <h1 className="">Hotel Athar asawds</h1>
      </div>
      <div class="w-1/2 ml-auto h-12 mt-24">
        <img
          src={AboutUsImg}
          className="object-fill rounded-lg hidden md:object-scale-down sm:block"
          alt=""
        />
      </div>
    </div>
  );
};
export default AboutUs;
