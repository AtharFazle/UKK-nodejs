import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';


const CardResepsionis = () => {
    const styles = {
        icon: {
            width : 100,
            height :100,
            allingItem:"right",
        },
    }


    const navigateTo = useNavigate()
    return (
        <div className="hover:scale-105" onClick={() => navigateTo("/LoginResepsionis")}>
        <div className="bg-blue-300 p-10 rounded-lg shadow-md">
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-xl font-bold justify-center mb-1">
                Login Resepsionis
              </h1>
              <h3 className="text-xs uppercase font-bold mb-2">Resepsionist Only</h3>
              <h2 className="tracking-wide font-semibold">
                Find an a best room for your Vacation
              </h2>
            </div>
            <GroupsRoundedIcon style={styles.icon} />
          </div>
          <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
          onClick={()=> navigateTo("/LoginResepsionis")}
          >
            Login
          </button>
        </div>
      </div>
    )
}


export default CardResepsionis