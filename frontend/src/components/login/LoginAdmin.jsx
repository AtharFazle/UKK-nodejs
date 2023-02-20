import React from "react";
import axios from "axios";
import { useState } from "react";
import loginImg from "../../assets/login.jpg";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleFormLoginAdmin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/hotel/user/admin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      setMessage("Login failed. Please try again.");
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      
      <div className="bg-gray-800 flex flex-col justify-center">
      <div className="flex justify-center mb-8 text-4x1 dark:text-white font-bold allign center">ADMIN LOGIN PAGE</div>
        <form action="" className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4x1 dark:text-white font-bold text-center">SIGN IN</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>User Name</label>
            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  type="text" />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input className="rounded-lg bg-gray-700 mt-2 p-2 focus: border-blue-500 focus:bg-gray-800 focus:outline-none"  type="password" />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember me</p>
            <p><input type="checkbox" />Forgot Password</p>
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 rounded-lg shadow-lg shadow-teal-500/50 hover: shadow-teal-500/40 font-bold text-white">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
