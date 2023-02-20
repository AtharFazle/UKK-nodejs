import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const CardAdmin = () => {
  const navigateTo = useNavigate();

  const styles = {
    icon: {
      width: 100,
      height: 100,
      allignItem: "right",
    },
  };
  return (
    <div className="hover:scale-105 " onClick={() => navigateTo("/LoginAdmin")}>
      <div className="bg-orange-300 p-10 rounded-lg shadow-md">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-x1 font-bold justify-center mb-1">
              Login Admin
            </h1>
            <h3 className="text-xs uppercase font-bold mb-2">Admin Only</h3>
            <h2 className="tracking-wide font-semibold">
              Admin can control and monitoring the website
            </h2>
          </div>
          <AdminPanelSettingsIcon style={styles.icon} />
        </div>
        <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default CardAdmin;
