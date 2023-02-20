import React from "react";
import Hotel from '../../assets/Hotel.mp4';
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="relative bg-gray-900 min-h-screen">
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                <source src={Hotel} type="video/mp4" />
            </video>

            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[30%] w-full text-white p-4 md:-50% max-w-[600px] h-full flex flex-col">
                    <h1 className="font-extrabold text-4xl">Athar Hotel</h1>
                    <h2 className="text-4x1 py-4 italic font-bold">Best Hotel With Best Service</h2>
                    <p>Hotel terbaik untuk anda dengan harga yang murah namun pelayanan yang tidak murahan
                    </p>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-black text-white font-bold py-2 px-4 opacity-75 rounded-lg hover:opacity-100 mt-10">

                        Lets Start
                    </button>
                </div>







            </div>
        </div >
    );
};

export default Home;

