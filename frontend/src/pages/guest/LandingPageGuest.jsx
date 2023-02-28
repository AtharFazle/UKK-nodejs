import React from "react";
import SidebarGuest from "../../components/SidebarGuest";
import AboutUs from "../../pages/Home/AboutUs";
import TipeKamar from "../room/TipeKamar";
import { Link, animateScroll as scroll } from "react-scroll";
import { ListTipeKamar } from "../../components";
 

const LandingPageGuest = () => {
  return (
    <div class="flex flex-row w-full ">
      <div class="basis-1/7"><SidebarGuest /></div>
      <div class="basis-6/7">
        <div className="pb-48">
        <AboutUs />
        </div>
        <div className="pt-96">
<ListTipeKamar/>
        </div>
        </div>

    </div>


  )
}
export default LandingPageGuest