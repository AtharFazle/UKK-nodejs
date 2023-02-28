import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardGuest from "./Cards/CardGuest";
import CardAdmin from "./Cards/CardAdmin";
import CardResepsionis from "./Cards/CardResepsionis";
import HotelIcon from '@mui/icons-material/Hotel';

const LoginPage = () => {

const styles = {
  icon :{
    width:75,
    height:75,
    allignItem:"right",
    position : "absolute",
  },
}
  const navigateTo = useNavigate();
  return (
    <div>
      <HotelIcon style={styles.icon}/>
    <h1 className="h-15 text-xl font-bold text-center mt-8">
        LOGIN AS
        <br />
        <div className="h-15 text-lg font-light text-slate-600 text-rig">Choose Your login method..</div>
        </h1>
    <div className="mt-32 mr-8 ml-8 p-2 font-inter grid grid-cols-1 gap-3 md:grid-cols-3 ">
      <div className="rounded-lg">
        <CardGuest />
      </div>
      <div className="rounded-lg">
        <CardAdmin />
      </div>
      <div className=" rounded-lg">
        <CardResepsionis />
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
