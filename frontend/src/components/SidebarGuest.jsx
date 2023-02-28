import React from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHotel } from "react-icons/bi";
import{FaHotel} from "react-icons/fa"
import {FcAbout} from "react-icons/fc"
import{AiOutlineMessage} from "react-icons/ai"
import {BiLogOut} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";


const SidebarGuest = () => {
    const navigateTo = useNavigate();
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover :text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group ">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-900 pb-4 w-full">
              Athar Hotel
            </h1>
            {/* Tipe_kamar */}
            <div className="my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              Link to="section1">
                <FcAbout className="text-2x1 text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-600 group-hover:text-white font-semibold">
                  About Us
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaHotel className="text-2x1 text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-600 group-hover:text-white font-semibold">
                  Tipe Kamar
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiHotel className="text-2x1 text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-600 group-hover:text-white font-semibold">
                  Pesan Kamar
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <AiOutlineMessage className="text-2x1 text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-600 group-hover:text-white font-semibold">
                  Pengaduan
                </h3>
              </div>
            </div>
            {/* Back */}
            <div className="my-9 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiLogOut className="text-2x1 text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-600 group-hover:text-white font-semibold">
                  Back
                </h3>
              </div>
            </div>
            
          </div>
        </div>
      </Disclosure>
    </div>
  );
};
export default SidebarGuest;
