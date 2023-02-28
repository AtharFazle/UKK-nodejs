import {React} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const Navbar = ()=>{

        const navigate = useNavigate();
    return (
        <div>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Athar Hotel</span>
        </a>
        <div className="flex items-center">
            <a href="tel:5541251234" className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">081259971975</a>
            <a  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"onClick={() => navigate("/login")}>Login</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>

    )
}
export default Navbar
