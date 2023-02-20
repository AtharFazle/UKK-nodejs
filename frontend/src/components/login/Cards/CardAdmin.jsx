import React from "react";
import axios from "axios";



const CardAdmin = () => {
    return (
        <div className="bg-gray-300 flex justify-center items-center h-screen">
            <div className="bg-white p-10 rounded-lg shadow-md">
                <h1 className="text-xl font-bold justify-center">Login Guest</h1>
                <div className="mt-4 mb-10">
                    <div></div>

                </div>
                <h3 className="text-xs uppercase">Current lesson:</h3>
                <h2 className="tracking-wide">
                    Object in JavaScript
                    <br />
                    (Challenge)
                </h2>
                <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button>
            </div>
        </div>
    )
}


export default CardAdmin