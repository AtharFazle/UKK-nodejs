import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


const CardGuest = () => {
  const navigateTo = useNavigate();
  const styles = {
    icon: {
      width: 100,
      height: 100,
      alignItem: "right",
    },
  };
  return (
    <div className="hover:scale-105" onClick={() => navigateTo("/LoginGuest")}>
      <div className="bg-blue-300 p-10 rounded-lg shadow-md">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-xl font-bold justify-center mb-1">
              Login Guest
            </h1>
            <h3 className="text-xs uppercase font-bold mb-2">Guest Only</h3>
            <h2 className="tracking-wide font-semibold">
              Find an a best room for your Vacation
            </h2>
          </div>
          <PersonIcon style={styles.icon} />
        </div>
        <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
        onClick={() => navigateTo("/LoginGuest")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default CardGuest;
