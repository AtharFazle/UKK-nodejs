import React from "react";
import SidebarGuest from "../../components/navbar/SidebarGuest";
import AboutUs from "../../components/Home/AboutUs";
import { Link, animateScroll as scroll } from "react-scroll";

const LandingPageGuest = ()=>{
return(
    <div class="flex flex-row w-full">
  <div class="basis-1/4"><SidebarGuest/></div>
  <div class="basis-3/4"><AboutUs/></div>
</div>

)
}
export default LandingPageGuest