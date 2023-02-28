import React from "react";
import AboutUsImg from "../../assets/AboutUsImg.jpg";

const AboutUs = () => {
  return (
    <div class="flex flex-wrap mr-24 ">
      {/* 1). */}
      {/* Our way is being */}
      <div className="pb-24">
      <div class="w-1/2 mr-auto h-12 flex ">
        <div className="m-12 mt-36 text-left   md:text-left lg:text-left sm:text-center">
          <h1 className="font-extrabold text-4xl text-slate-600 ">Our Way is Being</h1>
          <h2 className="mt-6 font-normal">At Radisson Hotel Group we strive to be the first choice in the mind of guests, owners and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of people, the community, ethics and the planet.
          </h2>
        </div>
      </div>
      {/* Image */}
      <div class="w-1/2 ml-auto h-12 mt-24 hidden sm:block">
        <img
          src={AboutUsImg}
          className="object-fill rounded-lg md:object-scale-down "
          alt=""
        />
      </div>
      </div>
      {/* 2). */}
      {/* Image */}
      <div className="pt-96">
      <div class="w-1/2 mr-auto h-12 mt-12  hidden sm:block">
        <img
          src={AboutUsImg}
          className="object-fill rounded-lg md:object-scale-down "
          alt=""
        />
      </div>
      {/* Our way is being */}
      <div class="w-1/2 ml-auto  h-12 flex ">
        <div className="m-12 mt-36 text-left   md:text-left lg:text-left sm:text-center">
          <h1 className="font-extrabold text-4xl text-slate-600 ">Our Way is Being</h1>
          <h2 className="mt-6 font-normal">At Radisson Hotel Group we strive to be the first choice in the mind of guests, owners and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of people, the community, ethics and the planet.
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
