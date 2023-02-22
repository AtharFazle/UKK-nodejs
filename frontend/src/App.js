import React from "react";
import UserList from "./components/user/UserList.tsx"
import axios from "axios";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/Home/Home";
import LoginPage from "./components/login/loginPage";
import LoginAdmin from "./components/login/LoginAdmin";
import LoginResepsionis from "./components/login/LoginResepsionis";
import LandingPageGuest from "./pages/guest/LandingPageGuest";


import {
  BrowserRouter as Router, Routes, Route

} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />

          {/* <<<<<login>>>>>>>>>>> */}

          <Route path='/login' element={<LoginPage />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/LoginResepsionis" element={<LoginResepsionis />} />

          {/* <<<<<user>>>>>>>>>>> */}
          <Route path='/User' element={<UserList />} />



           {/* <<<<<Guest>>>>>>>>>>> */}
           <Route path='/LandingPageGuest' element={<LandingPageGuest />} />
        </Routes>
      </Router>
    </div >
  )
}

export default App
